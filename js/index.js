

// -----------------------------INICIO LOADER E COOKIES--------------------------------- //

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
// -----------------------------FIM LOADER E COOKIES--------------------------------- //

// -----------------------------INICIO ANIMAÇÃO HEADER------------------------------- //

let navbar = document.getElementsByClassName("navbarHidden")
let el = document.getElementsByClassName("nav-list")
let el_active = document.getElementsByClassName("nav-list active")
var mobA = document.getElementsByClassName("mobile-menu active")
var mob = document.getElementsByClassName("mobile-menu")
var i = 0

function nav_list_click(){
    let el = document.getElementsByClassName("nav-list")

    el[0].addEventListener('click', function(e){
        idElemento = e.target.id
        sessionStorage.setItem('id_nav', idElemento);
    });
    alterar_nav()
}

window.onload = function() {

    

    // -----------------------------INICIO LOADER E COOKIES--------------------------------- //

    overlay.style.transition = "1s";
    overlay.style.opacity = 0;
    body.style.overflowY="visible";
    cook.style.display="flex"
    cookCon.style.display="grid"
    setTimeout(tirar, 500)

    // -----------------------------FIM LOADER E COOKIES--------------------------------- //
    setTimeout(animaWpp, 2000)
}

// function alterar_nav(){
//     loadStorageNav = sessionStorage.getItem('id_nav');
//     let navOne = document.getElementById("nav1")
//     let navTwo = document.getElementById("nav2")
//     let navThree = document.getElementById("nav3")
//     let navFour = document.getElementById("nav4")
//     let navFive = document.getElementById("nav5")
//     navOne.style.color='#FFFFFF'
//     navOne.style.transition="1s"
//     navTwo.style.color='#FFFFFF'
//     navTwo.style.transition="1s"
//     navThree.style.color='#FFFFFF'
//     navThree.style.transition="1s"
//     navFour.style.color='#FFFFFF'
//     navFour.style.transition="1s"
//     navFive.style.color='#FFFFFF'
//     navFive.style.transition="1s"

    
//     for(i =1; i<=5; i++){
//         let navs = document.getElementById("nav" + i)
        
//         if(navs.id == loadStorageNav){
//             navs.style.color='#FFD700'
//             navs.style.transition="1s"
//             break
//         }
//     }
// }

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

// window.addEventListener("scroll", show())
// -----------------------------FIM ANIMAÇÃO HEADER------------------------------- //


// -------------------------------------INICIO ANIMAÇÃO COM SCROLL----------------------------------//

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




// -------------------------------------FIM ANIMAÇÃO COM SCROLL---------------------------------- //


// -------------------------------------INICIO ANIMAÇÃO PROCESSOS-------------------------------- //

let csOne = document.getElementById("cc" + 1)
let csTwo = document.getElementById("cc" + 2)
let csThree = document.getElementById("cc" + 3)
let csFour = document.getElementById("cc" + 4)


function processos(num){
    let process = document.getElementsByClassName("wrapper-icon")
    for(let i = 0; i <= process.length; i++){
        if(num == i){
            sessionStorage.setItem('id_car', process[i].id)
            break
        }
    }
    loadStorageCar = sessionStorage.getItem('id_car');
    loadStorageCar = "cc" + loadStorageCar.slice(-1);
    csOne.style.transform = 'translate(-100vw)'
    csOne.style.display = 'none'
    csTwo.style.transform = 'translate(-100vw)'
    csTwo.style.display = 'none'
    csThree.style.transform = 'translate(-100vw)'
    csThree.style.display = 'none'
    csFour.style.transform = 'translate(-100vw)'
    csFour.style.display = 'none'
    for(i =1; i<=process.length; i++){
        let cs = document.getElementById("cc" + i)
        if(cs.id == loadStorageCar){
            cs.style.display = 'flex'
            cs.style.transition = 'all 1s'
            cs.style.transform = 'translate(0)'
            break
        }
    }


    loadStorageCar = sessionStorage.getItem('id_car');

    for(i =1; i<=5; i++){
        let csFive = document.getElementById("c" + i)
        
        if(csFive.id == loadStorageCar){
            csFive.style.backgroundColor='#FFD700'
            csFive.style.transition="all 1s"
        }
        else{
            csFive.style.backgroundColor='transparent'
            csFive.style.transition="all 1s"
        }
    }
    
}

// -------------------------------------FIM ANIMAÇÃO PROCESSOS-------------------------------- //

// -------------------------------------INICIO ANIMAÇÃO WHATSAPP------------------------------ //

function animaWpp(){
    let wpp = document.getElementById("wpp")
    wpp.style.transition = 'all 1s'
    wpp.style.position = "fixed"
    wpp.style.opacity = "1"
    wpp.style.top = "inherit"
    wpp.style.bottom = "0"
}

// -------------------------------------FIM ANIMAÇÃO WHATSAPP--------------------------------- //

function teste(){
    var sobre = document.getElementById("sobre")
    var aplicabilidade = document.getElementById("aplicabilidade")
    var processos = document.getElementById("processos")
    var atuação = document.getElementById("atuação")
    var contato = document.getElementById("contato")
    var scrollYSobre = sobre.getBoundingClientRect()
    var scrollYAplicabilidade = aplicabilidade.getBoundingClientRect()
    var scrollYProcessos = processos.getBoundingClientRect()
    var scrollYAtuação = atuação.getBoundingClientRect()
    var scrollYContato = contato.getBoundingClientRect()
    let navOne = document.getElementById("nav1")
    let navTwo = document.getElementById("nav2")
    let navThree = document.getElementById("nav3")
    let navFour = document.getElementById("nav4")
    let navFive = document.getElementById("nav5")
    // var convertPx2 = {
    //     vh: function(px){
    //       px = parseFloat(px);
    //       var wh = $(window).height(); // captura a altura da viewport
      
    //       // faz a relação de  porcentagem dos pixels informados
    //       // com a altura da viewport
    //       return (px*100)/wh;
    //     }
    // }

    var divOne = document.querySelector(".One")
    var alturaOne = parseInt(divOne.clientHeight, 10)

    var divTwo = document.querySelector(".Two")
    var alturaTwo = parseInt(divTwo.clientHeight, 10)

    var divThree = document.querySelector(".Three")
    var alturaThree = parseInt(divThree.clientHeight, 10)

    var divFour = document.querySelector(".Four")
    var alturaFour = parseInt(divFour.clientHeight, 10)

    var footer = document.querySelector("#contato")
    var alturaFooter = parseInt(footer.clientHeight, 10)

    if(scrollYSobre.y <= 100 + 500  && scrollYSobre.y >= alturaOne * (-1)){
        navOne.style.color='#FFD700'
        navOne.style.transition="all 1s"
    }
    else{
        navOne.style.color='#FFFFFF'
        navOne.style.transition="1s"
    }

    if(scrollYAtuação.y <= 0 && scrollYAtuação.y >= alturaTwo * (-1) - 100){
        navTwo.style.color='#FFD700'
        navTwo.style.transition="all 1s"
    }
    else{
        navTwo.style.color='#FFFFFF'
        navTwo.style.transition="all 1s"
    }
    if(scrollYProcessos.y <= 0 && scrollYProcessos.y >= alturaThree * (-1)){
        navThree.style.color='#FFD700'
        navThree.style.transition="all 1s"
    }
    else{
        navThree.style.color='#FFFFFF'
        navThree.style.transition="all 1s"
    }
    if(scrollYAplicabilidade.y <= 0 && scrollYAplicabilidade.y >= alturaFour * (-1) + 200){
        navFour.style.color='#FFD700'
        navFour.style.transition="all 1s"
    }
    else{
        navFour.style.color='#FFFFFF'
        navFour.style.transition="all 1s"
    }
    if(scrollYContato.y <= alturaFour + 100 && scrollYContato.y >= (alturaFooter * (-1))){
        navFive.style.color='#FFD700'
        navFive.style.transition="all 1s"
    }
    else{
        navFive.style.color='#FFFFFF'
        navFive.style.transition="all 1s"
    }
}

window.addEventListener('scroll', function(){
    teste();
})