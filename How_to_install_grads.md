# Ubuntu(WSL)上にGRADs導入

## 1.Ubuntu (WSL)でのGRADSの導入

gradsそのもののインストール:Ubuntuで
```
sudo apt update
sudo apt install grads
```

grads以外にインストールが推奨されるのは以下の3つ(バッチモード(grads -b)実行ならいらない。ウィンドウが欲しければ、Xserverは必須。)
・Xserver(可視化用)  https://sourceforge.net/projects/vcxsrv/  
起動時の設定は全部デフォルト。
Windowsファイアウォールの設定はパブリックプライベート両方にも✓を入れる  
あと、以下のコマンドでDISPLAYという名前の環境変数を作る。
```
vi ~/.bashrc
export DISPLAY=localhost:0.0
export "LIBGL_ALWAYS_INDIRECT=1"
```
- 補足：Windows 11のWSLだと、"Authorization required, but no authorization protocol specified Error in GXSTRT: Unable to connect to X server"が出た。
あと、↑のbashの処理はいらず、
- sudo aptで落としている状態でXserver(vcxsrv)をアンインストール＆インストールしなおして、
- Xserver起動時のGUIで、Extra Settingsのところで"Disable access control"にチェックを入れる
-![image](https://user-images.githubusercontent.com/84554010/188621830-31b609c2-e0c4-4545-9e8e-d35ddc5b7a25.png)

と、`grads`でそのままGUIが起動できた(やや時間差あり)。 アンインストールとインストールは環境によっては必要ないかもしれない。 
![image](https://user-images.githubusercontent.com/84554010/188621997-cddd06a2-893c-4246-945d-44d5569e55dc.png)


・Wgrib2  
http://hydro.iis.u-tokyo.ac.jp/~akira/page/Linux/contents/tool/wgrib2.html
をみてインストして、make。
以下, /home/shiraにできたgrib2上で作業し、でてきたgrib2を参考サイトのように、usr/localにmvすることはしない。
```
vi ~/.bashrc
export WGRIB2="/home/shira/grib2"
export PATH="${WGRIB2}/wgrib2:${PATH}"
```
を一番下に追加してから、
```
source ~/.bashrc
```

・g2ctl  
Gradsに読み込ませるgrib2ファイルの説明するコントロールファイルを作るために使うファイル。  
GRADsは基本的にctlファイルとバイナリを読み込んで処理される。  
https://sites.google.com/site/afcgrads/home/advanced/grib  
以下、導入
```
$ wget ftp://ftp.cpc.ncep.noaa.gov/wd51we/g2ctl/g2ctl
$ chmod a+x g2ctl
```
次に、vi g2ctlで、最初の方にある$ wgrib2を$wgrib2='/home/shira/grib2/wgrib2';のように、
wgrib2コマンドがある場所にかきかえる。  
このg2ctlはusr/binもしくはusr/local/binに入れると、「g2ctl」というコマンドを認識するようになるので、移動が必要。
suで作業するか、もしくはsudoをcpの前につけて以下を実行
```
# cp g2ctl /usr/local/bin
```
(実行にはperlのインストが必要。sudo apt install perl　でできる。)  

## 2.GRADs実行の準備
①ctlファイルの作成。grib形式ファイルを、GRADSが読めるように変更  
WRFの出力ファイルをGRADSで読み込むためには、ARWpostというフリーソフトを使った処理が必須。
```
g2ctl -0 fnl_20210724_18_00.grib2 > fnl_20210724_18_00.grib2.ctl
```
②idxファイル作成。コマンド：
```
gribmap -i fnl_20210724_18_00.grib2.ctl
```
(複数ファイルある場合は、下の方のshを実行すると複数ファイルに対してこの処理を一括でできる)

③Xserver(Xlaunch)を起動後、
読み込ませるファイルがあるpathで ```grads``` でgrads起動  
Enterを2回押して、「ga->」と出たら成功。  
```
shira@DESKTOP-HTK4HMM:~/grib2/wgrib2$ grads

Grid Analysis and Display System (GrADS) Version 2.2.1
Copyright (C) 1988-2018 by George Mason University
GrADS comes with ABSOLUTELY NO WARRANTY
See file COPYRIGHT for more information

Config: v2.2.1 little-endian readline grib2 netcdf hdf4-sds hdf5 opendap-grids,stn geotiff shapefile
Issue 'q config' and 'q gxconfig' commands for more detailed configuration information
Landscape mode? ('n' for portrait):
GX Package Initialization: Size = 11 8.5
ga->
```

エラーについて  
Ubuntuとかでやる場合、wrfoutの表示形式は wrfout_d01_2019-10-10_12%3A00%3A00.datみたいになる。ctlは、以下のような形式ででてくるので、openしようとしても`dset ^wrfout_d01_2019-10-10_12:00:00.dat`という入力ファイルがないです、というエラーが出る。
```
ga-> open wrfout_d01_2019-10-10_12%3A00%3A00.ctl
Scanning description file:  wrfout_d01_2019-10-10_12%3A00%3A00.ctl
Open Error:  Can't open binary data file
  File name = wrfout_d01_2019-10-10_12:00:00.dat→こんなファイルありません！というエラー
```
そのような場合には、ctlファイル1行目の、`dset ^wrfout_d01_2019-10-10_12%3A00%3A00.dat`にすること。

```
#.ctlの中身。1行目をdset ^wrfout_d01_2019-10-10_12%3A00%3A00.datのように、
#lsコマンドで取得できるWRFのバイナリファイル名と同じ名前にすること。
dset ^wrfout_d01_2019-10-10_12:00:00.dat
options  byteswapped
undef 1.e30
title  OUTPUT FROM WRF V3.8.1 MODEL
xdef  583 levels
   124.3882
   124.4402
   124.4921
   124.5440
   ```

- 備考  
WRFに関してはARWpostを先に実行する必要がある。
また、より高度なライブラリ(カラーバーなど)を使用する場合は、一番したのgradslibをインストールしてbashrcでパスを通す必要がある。
```
########以下、GRADｓのコマンドの例。細かいコマンドは実際の事例を参照のこと#######
#基本
open fnl_20210724_18_00.grib2.ctl
set lev 850
set lat 15 50
set lon 125 160
set gxout grfill
ga-> d  ugrd10m;vgrd10m #ベクトルで表示
c #画面クリア
reinit #リセット(ファイルの読み込みも再度し直す必要がある)

#ファイルに格納されている変数を見る
q file 

#ラベル
ga-> draw ylab latitude
ga-> draw xlab longitude

#色塗り設定。setしてから、d(display)する
set gxout shaded
set gxout contour
#流線
set gxout stream
#矢羽根
set gxout barb
d 変数名

#画像出力
gxprint tekitou.png

#投影図法
set mproj latlon（メルカトル）
#scaled	XY直交座標。「latlon」と違って縦横比は一定ではなく、画面一杯になるように表示される。
#nps	北半球のポーラーステレオ図法。
#sps	南半球のポーラーステレオ図法。
#robinson	ロビンソン図法。ただし全球を表示する場合のみ使用可能。
#off	グリッドの表示は「scaled」と同じ。ただし、地図が表示されず、軸のラベルも緯度経度で表示#されない。

#10m風速の水平発散
ga-> define div=  hdivg(ugrd10m,vgrd10m)
ga-> d div
Contouring: -0.00012 to 4e-05 interval 2e-05


  
#鉛直断面図https://seesaawiki.jp/ykamae_grads-#note/d/GrADS%A4%CB%A4%C4%A4%A4%A4%C6%A4%CE%A5%E1%A5%E2#content_7_38

経度X度における東西鉛直断面図

'set lon X' (またはset x ?)
'set y ? ??' (またはset lat ? ??)
'set z ? ??' (またはset lev ? ??)
'd var'

東西平均値の南北断面図

'set x 1'
'set y ? ??' (またはset lat ? ??)
'set z ? ??' (またはset lev ? ??)
'd ave(var, x=1, x=??)'

鉛直プロファイルの時間変化

'set x ?'
'set y ?'
'set z ? ??' (またはset lev ? ??)
'set t ? ??' (またはset time ??? ???)
'd var'

#http://akyura.sakura.ne.jp/study/GrADS/Command/map.html
#解像度を上げる
set mpdset hires

#画面下のGRADs表記を消す。
set grads off

#背景色を白に
set display color white

#出力済みの図に対してカラーバーを出す。(Contour等では効かないので注意。shadedなら聞く)
cbarn

set map オプション	地図を描く線の色、種類、太さを指定。
auto	自動的に決める。
色 種類 太さ	地図を描く線の色、種類、太さを指定。
```

# データを一括処理でbinとctlに変換するsh
ディレクトリ内のbinファイルを全部一括でGRADs用ファイルに変換（MSM）  
grib2があるディレクトリ内にshellを置いてたたく。  Ubuntuでやるときは改行コードLFに直さないとエラーがでる！！
```
#!/bin/bash

###現Dirの"bin"という名前のファイル名を取得してGRADs用に変換する.(MSM用)


files="*bin"
fileary=()
dirary=()
for filepath in $files; do
	  if [ -f $filepath ] ; then
		      fileary+=("$filepath")
		        elif [ -d $filepath ] ; then
				    dirary+=("$filepath")
				      fi
			      done

			      echo "GPV(grib2) Files to GrADs ctl files"
			      for i in ${fileary[@]}; do
				        echo $i
					g2ctl $i > $i.ctl
					gribmap -i $i.ctl 
				done

			      echo "Job completed!!!"


```
# gradslib
[Reference](https://seesaawiki.jp/ykamae_grads-note/d/GrADS%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8%A5%E9%A5%A4%A5%D6%A5%E9%A5%EA)  
[Download](https://researchmap.jp/multidatabases/multidatabase_contents/detail/232785/5dc1aaaf5a0d631c7e4b20d34f002f6c?frame_id=822841)  
cbarnとかでカラーバーを使うためには、gradslibというスクリプト集が必要。
ダウンロードしたあと、展開したファイルごとgrib2直下のlibに入れる  
DIR構成：(grib2DIR)/grib2/lib/gradslib

```
vi ~/.bashrcで以下を追加する
export GASCRP="/home/shira/grib2/lib/gradslib"

ちなみに、bashrcの例。
export WGRIB2="/home/shira/grib2"
export PATH="${WGRIB2}/wgrib2:${PATH}"
export GASCRP="/home/shira/grib2/lib/gradslib"

```

実行結果例
![image](https://user-images.githubusercontent.com/84554010/162676830-271da97e-3274-46a2-bf5f-21ffabf05870.png)

# Errorなどの対処
以下は、ctlファイルの中のFilename(1行目)が、Ubuntuが認識している名前と違うので起こる
```
ga-> open wrfout_d01_2019-09-07_00%3A00%3A00.ctl
Scanning description file:  wrfout_d01_2019-09-07_00%3A00%3A00.ctl
Open Error:  Can't open binary data file
  File name = wrfout_d01_2019-09-07_00:00:00.dat
```
対処法：.ctlの1行目を`pwd`で表示されるctlファイル名と同じようにする
```
dset ^wrfout_d01_2019-09-07_00%3A00%3A00.ctl
```
