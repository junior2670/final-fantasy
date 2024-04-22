let next =document.querySelector(".next")
let prev=document.querySelector(".prev")
function slidernext(){
    var item=document.getElementsByClassName("item")
    let slide=document.getElementsByClassName("slide")
    slide.appendChild(item[0])
}
next.addEventListener("click",slidernext)
var item=document.getElementsByClassName("item")
let slide=document.getElementsByClassName("slide")
console.log(slide)
console.log(item[0])
console.log(item)
console.log(slide.appendchlid(item[0]))

 
