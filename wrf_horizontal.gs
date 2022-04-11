#This is the grads script for Horizontal Dir written by T.,Shirai 20220131
#grads -b: バッチモードで実行
###################
#Declare Variables#
###################

#filename(Change by typing CTRL+R)
'open wrfout_d01_2019-10-11_12:00:00.ctl'

#T DIMs of DAT file
tmax=5

#Region-Small
    'set lon 125 155'
    'set lat 18 48'

#Region-Large
    'set lon 125 145'
    'set lat 28 43'


#initialize iterational variables(Optional)
t=1
j=1

'!mkdir hor'

#############
#START GrADs#
#############
#vertical closs-section

'reinit'
'open wrfout_d01_2019-10-11_12:00:00.ctl'
'c'
'set display color white'
'set grads off'
'set mpdset hires'
#################################200hpa####################################

#########################
#200hpa_hight&Temp
#########################

###########Small##############


t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 200'
    'color 220 230 1'
    'set gxout shaded'
    'd tk'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-200hpa-hgt-temp-t-'t
    'gxprint hor/19191112-200hpa-hgttemp-t-'t'.png'
    'c'
     j=j+1
     t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 200'
    'color 220 230 1'
    'set gxout shaded'
    'd tk'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-200hpa-hgttemp-t-'t
    'gxprint hor/19191112-200hpa-hgttemp-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

#########################
#200hpa_Wind
#########################

###########Small##############

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 200'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u*u+v*v)'
    'cbarn'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 1' 
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-200hpa-wind-t-'t
    'gxprint hor/19191112-200hpa-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 200'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u*u+v*v)'
    'cbarn'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 1' 
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-200hpa-wind-t-'t
    'gxprint hor/19191112-200hpa-wind-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

#################################500hpa####################################
#########################
#500hpa_hight&Temp
#########################


t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 500'
    'color 5200 5800 60'
    'set gxout shaded'
    'd (ph+phb)/9.81'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd tk'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-500hpa-hgt-temp-t-'t
    'gxprint hor/19191112-500hpa-hgttemp-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 500'
    'color 5200 5800 60'
    'set gxout shaded'
    'd (ph+phb)/9.81'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd tk'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-500hpa-hgttemp-t-'t
    'gxprint hor/19191112-500hpa-hgttemp-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile


#########################
#500hpa_RH
#########################

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 500'
    'color 50 100 5'
    'set gxout shaded'
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-500hpa-rh-t-'t
    'gxprint hor/19191112-500hpa-rh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 500'
    'color 50 100 5'
    'set gxout shaded'
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-500hpa-rh-t-'t
    'gxprint hor/19191112-500hpa-rh-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

#########################
#500hpa_Vorticity
#########################

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 500'
    'color -0.001 0.001 0.0002'
    'set gxout shaded'
    'd hcurl(u,v)'
    'cbarn 1 1 9.8 4.3'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-500hpa-vort-t-'t
    'gxprint hor/19191112-500hpa-vort-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 500'
    'color -0.001 0.001 0.0002'
    'set gxout shaded'
    'd hcurl(u,v)'
    'cbarn 1 1 9.8 4.3'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-500hpa-vort-t-'t
    'gxprint hor/19191112-500hpa-vort-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

#########################
#500hpa_Wind
#########################

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 500'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u*u+v*v)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-500hpa-wind-t-'t
    'gxprint hor/19191112-500hpa-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 500'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u*u+v*v)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-500hpa-wind-t-'t
    'gxprint hor/19191112-500hpa-wind-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

#################################700hpa####################################
###########################################################
#700hpa_rh##700hpa：上昇流と湿度(RH)
###########################################################

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 700'
    'color 50 100 5'
    'set gxout shaded'
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-700hpa-rh-t-'t
    'gxprint hor/19191112-700hpa-rh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 700'
    'color 50 100 5'
    'set gxout shaded'
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-700hpa-rh-t-'t
    'gxprint hor/19191112-700hpa-rh-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########################################################
################700hpa上昇流################
###########################################################


t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 700'
    'color -30 30 5'
    'set gxout shaded'
    'd w*100'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-700hpa-Upward Vel(cm/s)-t-'t
    'gxprint hor/19191112-700hpa-Upward-Vel(cm-s)-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 700'
    'color -30 30 5'
    'set gxout shaded'
    'd w*100'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-700hpa-Upward Vel(cm/s)-t-'t
    'gxprint hor/19191112-700hpa-Upward-Vel(cm-s)-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

#####################################################################################################
#850hpa_hight&temp##850hpa
#####################################################################################################
##small


t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 850'
    'color 1300 1600 20'
    'set gxout shaded'
    'd (ph+phb)/9.81'
    'cbarn'
    'set cint 20'
    'set cthick 1'
    'set gxout contour'
    'set ccolor 1'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-850hpa-hgttemp-t-'t
    'gxprint hor/19191112-850hpa-hgttemp-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 850'
    'color 1300 1600 20'
    'set gxout shaded'
    'd (ph+phb)/9.81'
    'cbarn'
    'set cint 20'
    'set cthick 1'
    'set gxout contour'
    'set ccolor 1'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-850hpa-hgttemp-t-'t
    'gxprint hor/19191112-850hpa-hgttemp-t-large-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########################################################
#850hpa_rh##850hpa：湿度(RH)
###########################################################

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 850'
    'color 50 100 5'
    'set gxout shaded'
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-850hpa-rh-t-'t
    'gxprint hor/19191112-850hpa-rh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 850'
    'color 50 100 5'
    'set gxout shaded'
    'd rh'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-850hpa-rh-t-'t
    'gxprint hor/19191112-850hpa-rh-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########################################################
#850hpa_wind
###########################################################


t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 850'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u*u+v*v)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,30,30);skip(v,30,30)'
    'draw title 19191112-850hpa-wind-t-'t
    'gxprint hor/19191112-850hpa-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 850'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u*u+v*v)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd (ph+phb)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u,20,20);skip(v,20,20)'
    'draw title 19191112-850hpa-wind-t-'t
    'gxprint hor/19191112-850hpa-wind-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

############################
#Surfaceの処理
############################
#####①気温とQVと風速
############################

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color 0.01 0.025 0.001'
    'set gxout shaded'
    'd q2'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set cint 4'
    'set gxout contour'
    'd t2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-Surface-q2-t2-t-'t
    'gxprint hor/19191112-Surface-q2-t2-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color 0.01 0.025 0.001'
    'set gxout shaded'
    'd q2'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set cint 4'
    'set gxout contour'
    'd t2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-Surface-q2-t2-t-'t
    'gxprint hor/19191112-Surface-q2-t2-large-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

############################
#####②slpと風速
############################
##small

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color 950 1010 5'
    'set gxout shaded'
    'd slp'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-Surface-slpwind-t-'t
    'gxprint hor/19191112-Surface-slpwind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

####large

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color 950 1010 5'
    'set gxout shaded'
    'd slp'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-Surface-slpwind-t-'t
    'gxprint hor/19191112-Surface-slpwind-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

############################
#####3風速
############################
##small

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u10*u10+v10*v10)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-Surface-wind-t-'t
    'gxprint hor/19191112-Surface-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

####large

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u10*u10+v10*v10)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-Surface-wind-t-'t
    'gxprint hor/19191112-Surface-wind-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

############################
####4flux
############################
##small

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color -200 200 50'
    'set gxout shaded'
    'd hfx'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd hfx'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-upward hfx(Wm-2)-t-'t
    'gxprint hor/19191112-upward-hfx(Wm-2)-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color -200 200 50'
    'set gxout shaded'
    'd hfx'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd hfx'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-upward hfx(Wm-2)-t-'t
    'gxprint hor/19191112-upward-hfx(Wm-2)-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

##small
####qfx

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color -0.0002 0.0008 0.00005'
    'set gxout shaded'
    'd qfx'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd qfx'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-upward qfx(kg-m2-s)-t-'t
    'gxprint hor/19191112-upward-qfx-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color -0.0002 0.0008 0.00005'
    'set gxout shaded'
    'd qfx'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd qfx'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-upward qfx(kg/m2/s)-t-'t
    'gxprint hor/19191112-upward-qfx-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

##small
####lh

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color 0 1600 200'
    'set gxout shaded'
    'd lh'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd lh'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-latent hfx(Wm-2)-t-'t
    'gxprint hor/19191112-latent-hfx(Wm-2)-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color 0 1600 200'
    'set gxout shaded'
    'd lh'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd lh'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-latent hfx(Wm-2)-t-'t
    'gxprint hor/19191112-latent-hfx(Wm-2)-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile


##small
####lh

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 155'
    'set lat 18 48'
    'set lev 1000'
    'color 0 4000 500'
    'set gxout shaded'
    'd pblh'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd pblh'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,30,30);skip(v10,30,30)'
    'draw title 19191112-pblh(m)-t-'t
    'gxprint hor/19191112-pblh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 125 145'
    'set lat 28 43'
    'set lev 1000'
    'color 0 4000 500'
    'set gxout shaded'
    'd pblh'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd pblh'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10,20,20);skip(v10,20,20)'
    'draw title 19191112-pblh-t-'t
    'gxprint hor/19191112-pblh-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile


