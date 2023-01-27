
const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'))
const save = document.querySelector ('.cookies-save')  
const container = document.querySelector ('.cookies-container') 

if(localPref) hide(localPref)

function hide () {

    container.style.transition="all 1s"
    container.style.opacity='0'
    var selected = "Accepted"
    window.localStorage.setItem('cookies-pref',JSON.stringify(selected))
    setTimeout(sair, 1000)
}
     
function sair () {
    container.style.display='none'


}

     
save.addEventListener('click',hide)





