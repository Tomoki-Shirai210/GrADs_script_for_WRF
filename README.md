# GrADs_script_for_WRF

WRFのデータを処理するためのGrADsスクリプトシェルです。
GrADsのインストールは、grads_how_to_install.mdを見てください
著者が趣味程度で解析用に作成したものになりますので、ご使用なされる際には**自己責任**でお願いいたします。
スクリプトを利用される際は、テキストエディタ等でファイル名等を変更してから、
`run script.gs `
を実行してください。結果はpng形式で出力されます。
出力したい変数を追加する際には、gradsを起動した状態で
`q file`
と打つと、.dat内の変数一覧を見ることができます。

## For foreign users:
Here is a script that outputs the WRF(Weather Research and Forecasting model) output results in png format. It can be processed for both vertical and horizontal directions. Feel free to use it, but I take no responsibility for it. 

なお、カラーバー出力のためにcbarnを利用しています。
利用には、スクリプトのダウンロードファイルが必要です。
https://researchmap.jp/multidatabases/multidatabase_contents/detail/232785/5dc1aaaf5a0d631c7e4b20d34f002f6c?frame_id=822841
の釜江先生のページからzipをダウンロードし、bashrc等を
`export GASCRP="/path-to-your-grib2_dir/grib2/lib/gradslib"`
とし、環境変数を通す必要があります。

**WRFデータの読み込みには、ARWpostによって生成したCTLファイルが必要になります。**
ARWpostの導入には、以下が参考になれば幸いです(こちらも、全て自己責任でお願いいたします。)
# ARWpost Download

[ARWpostのソース](https://www2.mmm.ucar.edu/wrf/src/ARWpost_V3.tar.gz)をダウンロードし任意のディレクトリに展開
`tar -xzvf ARWpost_V3.tar.gz`
```
cd ARWpost
./configure #ここでifort,gfortranどっちを使うか選ぶ・configure.arwpがでてくる
#以下に示したエラー回避処理が必要であれば行ってからコンパイルで終了
./compile
```

netcdfのversion4系列を使う場合に、compile前にやる必要があること：
src/Makefileの編集
```
ARWpost.exe: $(OBJS)
	$(FC) $(FFLAGS) $(LDFLAGS) -o $@ $(OBJS)  \
		-L$(NETCDF)/lib -I$(NETCDF)/include -lnetcdff -lnetcdf 

```
とする。-lnetcdffがないと、fortran用のnetcdfを参照できず`module_interp.f:(.text+0x40cf): undefined reference to "nf_inq_var_"`
とエラーが出る。

## gfortranでのエラーについて
```
/* Copyright (C) 1991-2012 Free Software Foundation, Inc.
 1
Error: Invalid character in name at (1)
module_get_file_names.f:2.3:

   This file is part of the GNU C Library.
   1
Error: Unclassifiable statement at (1)
module_get_file_names.f:4.3:

   The GNU C Library is free software; you can redistribute it and/or
   1
Error: Unclassifiable statement at (1)
module_get_file_names.f:4.39:

   The GNU C Library is free software; you can redistribute it and/or
```
これは、./configureするとでてくるconfigure.arwpで、`/lib/cpp -C -P -traditional `を`/lib/cpp -P -traditional `として、copylight文を出さないようにすると回避できる

## namelist.ARWpost

```
&datetime
 start_date = '2021-07-24_18:00:00',
 end_date   = '2021-07-28_06:00:00',
 interval_seconds = 43200, #output間隔
 tacc = 0,
 debug_level = 0,
/

&io
 input_root_name = './wrfout_d01_2021-07-24_18:00:00' #入力ファイル指定
 output_root_name = '../wrfout_d01_2021-07-24_18:00:00' #出力場所とファイル名指定
 plot = 'all_list'
 fields = 'height,geopt,theta,tc,tk,td,td2,rh,rh2,umet,vmet,pressure,u10m,v10m,wdir,wspd,wd10,ws10,slp,mcape,mcin,lcl,lfc,cape,cin,dbz,max_dbz,clfr'
 mercator_defs = .true.
/
 split_output = .true.
 frames_per_outfile = 2


 plot = 'all'
 plot = 'list' 
 plot = 'all_list'
! Below is a list of all available diagnostics
 fields = 'height,geopt,theta,tc,tk,td,td2,rh,rh2,umet,vmet,pressure,u10m,v10m,wdir,wspd,wd10,ws10,slp,mcape,mcin,lcl,lfc,cape,cin,dbz,max_dbz,clfr'
 

&interp
 interp_method = 1,
 interp_levels = 1000.,950.,900.,850.,800.,750.,700.,650.,600.,550.,500.,450.,400.,350.,300.,250.,200.,150.,100., #interp_method = 1,にすると、気圧面で内挿してくれる。
/
extrapolate = .true.

 interp_method = 1,     ! 0 is model levels, -1 is nice height levels, 1 is user specified pressure/height

 interp_levels = 1000.,950.,900.,850.,800.,750.,700.,650.,600.,550.,500.,450.,400.,350.,300.,250.,200.,150.,100.,
 interp_levels = 0.25, 0.50, 0.75, 1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0,


```

