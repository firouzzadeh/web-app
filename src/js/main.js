const listMenue = document.querySelector('.last-li-hover') 
const body = document.querySelector('body') 
const subMenue = document.querySelector('.submenue') 

listMenue.addEventListener('click',(e)=>{
    e.stopPropagation()
       subMenue.style.opacity = '1' 
 })
body.addEventListener('click',(e)=>{
    subMenue.style.opacity = '0' 
  })