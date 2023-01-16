var infobtn = document.getElementById('buttoninfo')
var planbtn = document.getElementById('buttonplan')
var info = document.getElementById('info')
var plan = document.getElementById('plan')
var next = document.getElementById('btnnext')
var back = document.getElementById('btnback')

function showinfo(){
    plan.style.display="none"
    info.style.display="block";

    document.querySelector('.infos a').style.hover='active'


}

function showplan(){
    info.style.display="none"
    plan.style.display="block"

}

infobtn.addEventListener('click', showinfo)   
planbtn.addEventListener('click', showplan)   
next.addEventListener('click', showplan)
back.addEventListener('click', showinfo)



