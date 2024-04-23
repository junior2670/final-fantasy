let next =document.querySelector(".next")
let prev=document.querySelector(".prev")

next.addEventListener("click",function(){
    var item=document.querySelectorAll(".item")
    var slide=document.getElementById("slide")
    slide.appendChild(item[0])
})
prev.addEventListener("click",function(){
    var item=document.querySelectorAll(".item")
    var slide=document.getElementById("slide")
    slide.prepend(item[item.length-1])
})
 var item=document.querySelectorAll(".item")
let slide=document.querySelectorAll(".slide")
// console.log(slide)
// console.log(item[0])
 console.log(slide )
// console.log(slide.appendchlid(item[0]))
console.log(slide)


 
