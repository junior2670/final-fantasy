/**
 * @modèle
 */
var envoyer=document.getElementById("envoyer")
/**
 * @view
 */
function validerAchat(){
    var message=document.getElementById("message")
    message.style.left="0px"
    message.style.transition="0.8s" 
}
/**
 * @control
 * 
 */
envoyer.addEventListener("click",validerAchat) 