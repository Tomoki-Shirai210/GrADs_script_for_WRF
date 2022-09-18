#This is the grads script for Horizontal Dir written by T.,Shirai 20220131
#grads -b: バッチモードで実行
###################
#Declare Variables#
###################

#filename(Change by typing CTRL+R)
#First File- Seconary file#

'open wrfout_d01_2022-09-15_00:00:00_3dvar.ctl'
'open wrfout_d01_2022-09-15_00:00:00_cntl.ctl'

#T DIMs of DAT file
tmax=9

#Region-Small
    'set lon 116 164'
    'set lat 15 46'

#Region-Large
    'set lon 120 135'
    'set lat 20 38'


#initialize iterational variables(Optional)
t=1
j=1

'!mkdir compare'

#############
#START GrADs#
#############
#vertical closs-section

'reinit'
'open wrfout_d01_2022-09-15_00:00:00_3dvar.ctl'
'open wrfout_d01_2022-09-15_00:00:00_cntl.ctl'

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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 200'
    'color 220 230 1'
    'set gxout shaded'
    'd tk.1-tk.2'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk.1-tk.2'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-200hpa-hgt-temp-t-'t
    'gxprint compare/22141500-200hpa-hgttemp-t-'t'.png'
    'c'
     j=j+1
     t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 200'
    'color 220 230 1'
    'set gxout shaded'
    'd tk.1-tk.2'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk.1-tk.2'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-200hpa-hgttemp-t-'t
    'gxprint compare/22141500-200hpa-hgttemp-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 200'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u.1*u.1+v.1*v.1)-sqrt(u.2*u.2+v.2*v.2)'
    'cbarn'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 1' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-200hpa-wind-t-'t
    'gxprint compare/22141500-200hpa-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 200'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u.1*u.1+v.1*v.1)-sqrt(u.2*u.2+v.2*v.2)'
    'cbarn'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 1' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-200hpa-wind-t-'t
    'gxprint compare/22141500-200hpa-wind-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 500'
    'color 5200 5800 60'
    'd tk.1-tk.2'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk.1-tk.2'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-500hpa-hgt-temp-t-'t
    'gxprint compare/22141500-500hpa-hgttemp-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 500'
    'color 5200 5800 60'
    'set gxout shaded'
    'd tk.1-tk.2'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk.1-tk.2'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-500hpa-hgttemp-t-'t
    'gxprint compare/22141500-500hpa-hgttemp-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 500'
    'color 50 100 5'
    'set gxout shaded'
    'd rh.1-rh.2'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-500hpa-rh-t-'t
    'gxprint compare/22141500-500hpa-rh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 500'
    'color 50 100 5'
    'set gxout shaded'
    'd rh.1-rh.2'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-500hpa-rh-t-'t
    'gxprint compare/22141500-500hpa-rh-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 500'
    'color -0.001 0.001 0.0002'
    'set gxout shaded'
    'd hcurl(u.1,v.1)-hcurl(u.2,v.2)'
    'cbarn 1 1 9.8 4.3'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-500hpa-vort-t-'t
    'gxprint compare/22141500-500hpa-vort-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 500'
    'color -0.001 0.001 0.0002'
    'set gxout shaded'
    'd hcurl(u.1,v.1)-hcurl(u.2,v.2)'
    'cbarn 1 1 9.8 4.3'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-500hpa-vort-t-'t
    'gxprint compare/22141500-500hpa-vort-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 500'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u.1*u.1+v.1*v.1)-sqrt(u.2*u.2+v.2*v.2)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-500hpa-wind-t-'t
    'gxprint compare/22141500-500hpa-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 500'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u.1*u.1+v.1*v.1)-sqrt(u.2*u.2+v.2*v.2)'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-500hpa-wind-t-'t
    'gxprint compare/22141500-500hpa-wind-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 850'
    'color 1300 1600 20'
    'd tk.1-tk.2'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk.1-tk.2'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-850hpa-hgttemp-t-'t
    'gxprint compare/22141500-850hpa-hgttemp-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 850'
    'color 1300 1600 20'
    'd tk.1-tk.2'
    'cbarn'
    'set cint 20'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 3' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set cstyle 3'
    'set cint 1'
    'd tk.1-tk.2'
    'set ccolor 1'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-850hpa-hgttemp-t-'t
    'gxprint compare/22141500-850hpa-hgttemp-t-large-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 850'
    'color 50 100 5'
    'set gxout shaded'
    'd rh.1-rh.2'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'
    'draw title 22141500-850hpa-rh-t-'t
    'gxprint compare/22141500-850hpa-rh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 850'
    'color 50 100 5'
    'set gxout shaded'
    'd rh.1-rh.2'
    'cbarn'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-850hpa-rh-t-'t
    'gxprint compare/22141500-850hpa-rh-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 850'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u.1*u.1+v.1*v.1)-sqrt(u.2*u.2+v.2*v.2)'
    'cbarn'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 1' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,30,30);skip(v.1-v.2,30,30)'    
    'draw title 22141500-850hpa-wind-t-'t
    'gxprint compare/22141500-850hpa-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 850'
    'color 0 50 5'
    'set gxout shaded'
    'd sqrt(u.1*u.1+v.1*v.1)-sqrt(u.2*u.2+v.2*v.2)'
    'cbarn'
    'set ccolor 1'
    'set cthick 1'
    'set cstyle 1' 
    'set gxout contour'
    'd (ph.1+phb.1)/9.81-(ph.2+phb.2)/9.81'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u.1-u.2,20,20);skip(v.1-v.2,20,20)'
    'draw title 22141500-850hpa-wind-t-'t
    'gxprint compare/22141500-850hpa-wind-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color 0.01 0.025 0.001'
    'set gxout shaded'
    'd q2.1-q2.2'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set cint 4'
    'set gxout contour'
    'd t2.1-t2.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-Surface-q2-t2-t-'t
    'gxprint compare/22141500-Surface-q2-t2-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

###########Large##############
t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color 0.01 0.025 0.001'
    'set gxout shaded'
    'd q2.1-q2.2'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set cint 4'
    'set gxout contour'
    'd t2.1-t2.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-Surface-q2-t2-t-'t
    'gxprint compare/22141500-Surface-q2-t2-large-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color 950 1010 5'
    'set gxout shaded'
    'd slp.1-slp.2'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp.1-slp.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-Surface-slpwind-t-'t
    'gxprint compare/22141500-Surface-slpwind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

####large

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color 950 1010 5'
    'set gxout shaded'
    'd slp.1-slp.2'
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp.1-slp.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-Surface-slpwind-t-'t
    'gxprint compare/22141500-Surface-slpwind-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u10.1*u10.1+v10.1*v10.1-(u10.2*u10.2+v10.2*v10.2))
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-Surface-wind-t-'t
    'gxprint compare/22141500-Surface-wind-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

####large

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color 0 60 5'
    'set gxout shaded'
    'd sqrt(u10.1*u10.1+v10.1*v10.1-(u10.2*u10.2+v10.2*v10.2))
    'cbarn'
    'set ccolor 1'
    'set cstyle 1'
    'set cthick 1'
    'set gxout contour'
    'd slp.1-slp.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-Surface-wind-t-'t
    'gxprint compare/22141500-Surface-wind-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color -200 200 50'
    'set gxout shaded'
    'd hfx.1-hfx.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd hfx.1-hfx.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-upward hfx(Wm-2)-t-'t
    'gxprint compare/22141500-upward-hfx(Wm-2)-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color -200 200 50'
    'set gxout shaded'
    'd hfx.1-hfx.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd hfx.1-hfx.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-upward hfx(Wm-2)-t-'t
    'gxprint compare/22141500-upward-hfx(Wm-2)-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color -0.0002 0.0008 0.00005'
    'set gxout shaded'
    'd qfx.1-qfx.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd qfx.1-qfx.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-upward qfx(kg-m2-s)-t-'t
    'gxprint compare/22141500-upward-qfx-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color -0.0002 0.0008 0.00005'
    'set gxout shaded'
    'd qfx.1-qfx.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd qfx.1-qfx.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-upward qfx(kg/m2/s)-t-'t
    'gxprint compare/22141500-upward-qfx-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color 0 1600 200'
    'set gxout shaded'
    'd lh.1-lh.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd lh.1-lh.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-latent hfx(Wm-2)-t-'t
    'gxprint compare/22141500-latent-hfx(Wm-2)-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color 0 1600 200'
    'set gxout shaded'
    'd lh.1-lh.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd lh.1-lh.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-latent hfx(Wm-2)-t-'t
    'gxprint compare/22141500-latent-hfx(Wm-2)-large-t-'t'.png'
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
    'set lon 116 164'
    'set lat 15 46'
    'set lev 1000'
    'color 0 4000 500'
    'set gxout shaded'
    'd pblh.1-pblh.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd pblh.1-pblh.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,30,30);skip(v10.1-v10.2,30,30)'
    'draw title 22141500-pblh(m)-t-'t
    'gxprint compare/22141500-pblh-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

t=1
j=1
while(j<=tmax)
    'set t 't
    'set lon 120 135'
    'set lat 20 38'
    'set lev 1000'
    'color 0 4000 500'
    'set gxout shaded'
    'd pblh.1-pblh.2'
    'cbarn'
    'set ccolor 0'
    'set cstyle 5'
    'set cthick 1'
    'set gxout contour'
    'd pblh.1-pblh.2'
    'set ccolor 1'
    'set gxout vector'
    'set arrscl 0.5 40'
    'd skip(u10.1-u10.2,20,20);skip(v10.1-v10.2,20,20)'
    'draw title 22141500-pblh-t-'t
    'gxprint compare/22141500-pblh-large-t-'t'.png'
    'c'
    j=j+1
    t=t+1
endwhile

