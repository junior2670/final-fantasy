/**
 * @modèle
 */
var valider=document.getElementById("valider")
/**
 * @view
 */
function validerAchat(){
    var message=document.getElementById("message")
    message.style.top="120px"
    message.style.transition="0.8s" 
}
/**
 * @control
 * 
 */
valider.addEventListener("click",validerAchat) 