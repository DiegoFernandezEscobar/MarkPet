const { default: Swal } = require("sweetalert2");

window.addEventListener("load", function(){
let formulario= document.querySelector("form");

formulario.addEventListener("submit",function(e){
    

    let campoDeNombre=document.querySelector("#firstName");
    let campoDeApellido=document.querySelector("#lastName");
    let campoDeEmail=document.querySelector("#email");
    let campoDePassword=document.querySelector("#password")
    if(!campoDeNombre.value==""||!campoDeNombre.value.length<3||!campoDeApellido==""||!campoDeApellido<4||!campoDeEmail==""||!campoDePassword==""){
        Swal.fire("Te registraste con exito")

        
       
    


}})






})