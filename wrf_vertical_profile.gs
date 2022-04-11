#This is the grads script (t loop ver) written by T.,Shirai 20220131
#For typhoon Hagibis
#grads -b: バッチモードで実行
###################
#Declare Variables#
###################

#filename(Change by typing CTRL+R)
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
'!mkdir anim gif'

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

##############################################################
#RH+Temp.Pot.Temp(Dashed)
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
    'color 60 100 5 '
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 1' 
    'set gxout contour'
    'd  tk*pow(1000/lev,0.2857)'
    'set ccolor 1'
    'set cthick 5'
    'd tk'
    'draw title 19191112rh-temp-pottemp-t-'t' lat-'lat
    'gxprint anim/19191112rh-temp-pottemp-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile


##############################################################
#Wind+ Pot. Temp.
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
    'color 300 375 5'
    'set gxout shaded'
    'd tk*pow(1000/lev,0.2857)'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 5' 
    'set gxout contour'
    'd sqrt(v*v+u*u)'
    'draw title 19191112wind-pottemp-t-'t' lat-'lat
    'gxprint anim/19191112wind-pottemp-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile




##############################################################
#Wind+Relative Pot. Temp.
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
    'color 335 385 5'
    'set gxout shaded'
    'd theta+2.8*(qvapor*1000)'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 5' 
    'set gxout contour'
    'd sqrt(v*v+u*u)'
    'draw title 19191112wind-relpottemp-t-'t' lat-'lat
    'gxprint anim/19191112wind-relpottemp-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile


##############################################################
#Wind
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
    'color 0 70 5'
    'set gxout shaded'
    'd sqrt(v*v+u*u)'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 1' 
    'set gxout contour'
    'd sqrt(v*v+u*u)'
    'draw title 19191112wind-t-'t' lat-'lat
    'gxprint anim/19191112wind-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile




##############################################################
#qcloud+qvapor(dashed)
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
    'color 0 0.002 0.0002'
    'set gxout shaded'
    'd qcloud'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 1' 
    'set gxout contour'
    'd qvapor'
    'draw title 19191112qcloud-qvapor-t-'t' lat-'lat
    'gxprint anim/19191112qcloud-qvapor-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile

#Gifに出力
#'!convert -delay 30 ./anim/*2-lat-*.0.png ./gif/qcloud-qvapor-t-2.gif'

##############################################################
#qrain+qnrain(dashed)
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
    'color 0 0.003 0.0003'
    'set gxout shaded'
    'd qrain'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 5' 
    'set gxout contour'
    'd qnrain'
    'draw title 19191112qrain-qnrain-t-'t' lat-'lat
    'gxprint anim/19191112qrain-qnrain-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile

##############################################################
#qsnow+qgraupel(dashed)
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
    'color 0 0.002 0.0002'
    'set gxout shaded'
    'd qsnow'
    'cbarn'
    'set ccolor 1'
    'set cthick 2'
    'set cstyle 1' 
    'set gxout contour'
    'd qgraup'
    'draw title 19191112qsnow-qgraup-t-'t' lat-'lat
    'gxprint anim/19191112qsnow-qgraup-t-'t'-lat-'lat'.0.png'
    'c'
    lat=lat+0.1
    i=i+1
  endwhile
 j=j+1
 t=t+1
endwhile


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
