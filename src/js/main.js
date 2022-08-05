const listMenue = document.querySelector('.last-li-hover') 
const resMenue = document.querySelector('.res-menue i') 
const menueDown = document.querySelector('.menue-down') 
const menueDownItem = document.querySelector('.menue-down-list') 
const menueLeft = document.querySelector('.menue-left') 
const body = document.querySelector('body') 
const subMenue = document.querySelector('.submenue') 
let flag = true
listMenue.addEventListener('click',(e)=>{
    e.stopPropagation()
       subMenue.style.opacity = '1' 
 })
body.addEventListener('click',(e)=>{
    subMenue.style.opacity = '0' 
  })
  resMenue.addEventListener('click',(e)=>{
     menueLeft.style.display = 'inline'
  })
  body.addEventListener('click',(e)=>{
    if(e.target.tagName !== 'I' && e.target.tagName!== 'A'  && e.target.tagName!== 'LI')
    menueLeft.style.display = 'none'
  })
  menueDown.addEventListener('click',(e)=>{
     menueDown.classList.toggle('active')
   })