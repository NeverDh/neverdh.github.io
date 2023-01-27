let navbar = document.getElementsByClassName("navbarHidden")
let el = document.getElementsByClassName("nav-list")
let el_active = document.getElementsByClassName("nav-list active")
var mobA = document.getElementsByClassName("mobile-menu active")
var mob = document.getElementsByClassName("mobile-menu")
var i = 0



// -----------------------------LOADER E COOKIES--------------------------------- //

const overlay = document.querySelector(".overlay");
const cook = document.querySelector(".cookies-container")
const cookCon = document.querySelector(".cookies-content")
cook.style.display="none"
cookCon.style.display="none"
var body = document.body;
body.style.overflowY="hidden"
function tirar(){
    overlay.style.display="none";
    
}
// -----------------------------LOADER E COOKIES--------------------------------- //




function nav_list_click(){
    let el = document.getElementsByClassName("nav-list")

    el[0].addEventListener('click', function(e){
        idElemento = e.target.id
        sessionStorage.setItem('id_nav', idElemento);
    });
}

window.onload = function alterar_nav(){
    loadStorage = sessionStorage.getItem('id_nav');

    for(i =1; i<=5; i++){
        let navs = document.getElementById("nav" + i)
        
        if(navs.id == loadStorage){
            navs.style.color='#FFD700'
            navs.style.transition="0s"
            break
        }
    }

    // -----------------------------LOADER E COOKIES--------------------------------- //

    overlay.style.transition = "1s";
    overlay.style.opacity = 0;
    body.style.overflowY="visible";
    cook.style.display="flex"
    cookCon.style.display="grid"
    setTimeout(tirar, 500)

    // -----------------------------LOADER E COOKIES--------------------------------- //
    
}




// function hide (){
//     navbar[0].style.position="absolute"
//     navbar[0].style.marginTop="-12vh"
    
    
// }

// var hider = setInterval(hide, 10000)

// function show (){
//     navbar[0].style.marginTop="0vh"
    
// }

// function hold (){
//     clearInterval(hider)
//     if(mobA[0] == undefined){
//         if (i === 0){
//             i = 1
//         }else{
//             i++
//         }

//         if( i % 2 != 0 ){
//             navbar[0].style.marginTop="0vh"
//         }
//     }else{
//         hider = setInterval(hide, 10000)
//     }
// }

const fade = document.querySelectorAll('[fade-anime');
const alvo2 = document.querySelectorAll('[data-anime="att"]');
const alvo = document.querySelectorAll('[data-anime]');
const alvo3 = document.querySelectorAll('[data-anime="p"]');
const animetionClass = 'animate';

setTimeout(aparecer, 1000)

function aparecer (){
    fade.forEach(function(e){
        e.classList.add(animetionClass)
    })
}

function animeScrool(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4) ;
    alvo.forEach(function(e){
       if((windowTop) > e.offsetTop){
        e.classList.add(animetionClass)
       }
    })
    alvo2.forEach(function(e){
        if((windowTop) > e.offsetTop){
         e.classList.add(animetionClass)
        }
     })
    alvo3.forEach(function(e){
        if((windowTop) > e.offsetTop){
        e.style.height="auto"
        let p = e.clientHeight
        e.style.height= p + "px"
        }
    })
}

window.addEventListener('scroll', function(){
    animeScrool();
})


//FUNÇÃO DE ESPERA
function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }


window.addEventListener("scroll", show)
