"use strict"

/*---------------------------------------------- Contact ---------------------------------------------------------------------------*/

// Obtenes los input del form
let inputName = document.getElementById("inputName");
let inputLastName = document.getElementById("inputLastname");
let inputEmail = document.getElementById("inputEmail");
let inputPhone = document.getElementById("inputPhone");
let inputMessage = document.getElementById("inputMessage");

// Obtenes el boton del form
let btnEnviar = document.getElementById("btnEnviar");

// Creas un arreglo vacio
let informacion = [];

// cuando se hace click en el boton 
btnEnviar.addEventListener("click", (e)=>{
    // prevenis que se recarge la pag
    e.preventDefault();
    
    // agregas el valor de los input al arreglo
    informacion.push(inputName.value);
    informacion.push(inputLastName.value);
    informacion.push(inputEmail.value);
    informacion.push(inputPhone.value);
    informacion.push(inputMessage.value);

    // Estas 2 lineas van tal cual como estan aca (informacio es el arreglo que creaste arriba)
    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"})
    // form.txt es el nombre del archivo que se descarga podes poner pepe.text
    saveAs(blob, "form.txt")
})