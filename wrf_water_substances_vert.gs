#s is the grads script (t loop ver) written by T.,Shirai 20220131
#grads -b: バッチモードで実行
###################
#Declare Variables#
###################

#filename(Change typing CTRL+R)
#wrfout_d01_2019-10-11_12:00:00.ctl

#T DIMs of DAT file
tmax=5

#South Lat
latmin=28.0

#Num of Iterations(latmin+0.1°*imax)
imax=70

#set longitude(Optional)
'set lon 134 142'

#initialize iterational variables(Optional)
t=1
j=1

#Should be comment-outed if these directories already exist
'!mkdir ice'

#############
#START GrADs#
#############
#vertical closs-section

'reinit'
'open wrfout_d01_2019-10-11_12:00:00.ctl'
'c'
'set display color white'
'set grads off '
'set mpdset hires'

################################################################
#qice+qnice(dashed)
##############################################################

t=1
j=1
while(j<=tmax)
 i=1
 lat=latmin
  while(i<=imax)
    'set t 't
    'set lev 1000 100'
    'set lon 134 142'
    'set lat 'lat
    'color 0 0.00005 0.000005'
    'set gxout shaded'
    'd qice'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 5' 
    'set gxout contour'
    'd qnice'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 1'
    'd qice'
    'draw title 19191112qice-qnice-t-'t' lat-'lat
    'gxprint ice/19191112qice-qnice-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile


exit
