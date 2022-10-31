/* Add your JavaScript to this file */
let subscribeBtn;
window.onload=function(){
    subscribeBtn=document.getElementsByClassName("btn")[1];
    subscribeBtn.addEventListener("click", subscribe);
}
let msg;
let eml;

function subscribe(event){
    event.preventDefault();
    msg=document.getElementsByClassName("message");
    eml=document.getElementById("email").value;
    
    if(eml!==""){
       return msg[0].innerHTML="Thank you! Your email address "+ eml+ " has been added to our mailing list.";

    } else {
        msg[0].innerHTML="Please enter a valid email address.";
    }
    return false;
}