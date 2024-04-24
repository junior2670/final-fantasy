/*
* @modèl
*/
var iconemenu=document.getElementById("icone")
var connect=document.getElementById("buton-conect")
var inscri=document.getElementById("buton-inscri")



/*
@view
*/
//fonction de la nav barre 
function apparaitre(){
    var menusecond=document.getElementById("menusecond")
    if(  menusecond.style.display=='none'){
        menusecond.style.display='block'
        menusecond.style.transition='0.8s'
    }
    else{
        menusecond.style.display='none'
        menusecond.style.transition='0.8s'
    }
   }

//fonction pour les inscription au compte
function inscription(){
    var message=document.getElementById("message")
    message.style.top="120px"
    message.style.transition="0.8s"
}

//function pour les connexion 
function connection(){
    var message=document.getElementById("message1")
    message.style.top="120px"
    message.style.transition="0.8s"
}




/*
*@controleur 
*/
iconemenu.addEventListener("click",apparaitre)




inscri.addEventListener("click", inscription)

connect.addEventListener("click",connection )

connect.addEventListener("click", function(event){
    event.preventDefault(); } )

inscri.addEventListener("click", function(event){
        event.preventDefault(); } )




