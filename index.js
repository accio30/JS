let homenum =document.getElementById("guest-points-text")
let guestnum = document.getElementById("home-points-text")
let hsetsnum = document.getElementById("HSETS")
let gsetsnum = document.getElementById("GSETS")
let homechange = 0
let guestchange = 0
let gsetschange = 0
let hsetschange = 0

function addshome1(){
    homechange += 1
    homenum.textContent = homechange
}

function addshome2(){
    homechange += 2
    homenum.textContent = homechange
}

function addshome3(){
    homechange += 3
    homenum.textContent = homechange
}

function addsguest1(){
    guestchange += 1
    guestnum.textContent = guestchange
}

function addsguest2(){
    guestchange += 2
    guestnum.textContent = guestchange
}

function addsguest3(){
    guestchange += 3
    guestnum.textContent = guestchange
}

function newgame(){
    guestchange = 0
    homechange = 0
    hsetschange = 0
    gsetschange = 0

    gsetsnum.textContent = gsetschange
    hsetsnum.textContent = hsetschange
    guestnum.textContent = guestchange
    homenum.textContent = homechange
}

function GSETSS(){
    gsetschange += 1
    gsetsnum.textContent = gsetschange
}

function HSETSS(){
    hsetschange += 1
    hsetsnum.textContent = hsetschange
}



