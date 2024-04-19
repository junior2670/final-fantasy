/*
* @modèl
*/
var iconemenu=document.getElementById("icone")
console.log(iconemenu)

/*
@view
*/
//fonction de la nav barre 
function apparaitre(){
    var menusecond=document.getElementById("menusecond")
    if(  menusecond.style.display='none'){
        menusecond.style.display='block'
    }
   }
   function diparaitre(){
    var menusecond=document.getElementById("menusecond")
    if(  menusecond.style.display='block'){
        menusecond.style.display='none'
    }
   }



/*
*@controleur 
*/
iconemenu.addEventListener("click",apparaitre)
iconemenu.addEventListener("dblclick", diparaitre)


