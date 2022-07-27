let homenum =document.getElementById("guest-points-text")
let guestnum = document.getElementById("home-points-text")
let hsetsnum = document.getElementById("HSETS")
let gsetsnum = document.getElementById("GSETS")
let homechange = 0
let guestchange = 0
let gsetschange = 0
let hsetschange = 0


function func(val){
switch(val){
    case 1:
        homechange ++
        homenum.textContent = homechange   
    break
    case 2:
        homechange += 2
        homenum.textContent = homechange 
    break
    case 3:
        homechange += 3
        homenum.textContent = homechange   
    break
    case 4:
        guestchange ++
        guestnum.textContent = guestchange  
    break
    case 5:
        guestchange += 2
        guestnum.textContent = guestchange  
    break
    case 6:
        guestchange += 3
        guestnum.textContent = guestchange  
    break   
    case 7:
        hsetschange ++
        hsetsnum.textContent = hsetschange
    break   
    case 8:
        gsetschange ++
        gsetsnum.textContent = gsetschange
    break   
    case 9:
    guestchange = 0
    homechange = 0
    hsetschange = 0
    gsetschange = 0
    timechange = 0

    gsetsnum.textContent = gsetschange
    hsetsnum.textContent = hsetschange
    guestnum.textContent = guestchange
    homenum.textContent = homechange
    timenum.textContent = timechange
    break
    case 10:
}
}

