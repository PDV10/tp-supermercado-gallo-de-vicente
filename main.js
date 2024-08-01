"use strict"

/*---------------------------------------------- Contact ---------------------------------------------------------------------------*/


// Obtenes el boton del form
let btnEnviar = document.getElementById("btnEnviar");

// Creas un arreglo vacio
let informacion = [];

// cuando se hace click en el boton 
btnEnviar.addEventListener("click", (e)=>{

    // prevenis que se recarge la pag
    e.preventDefault();
    let inputs = document.querySelectorAll(".inputContact");
    let contador = 0;
    inputs.forEach(input => {
        let value = input.value;
       
        if(value == ""){
            input.classList.remove("validated");
            input.classList.add("required");
          
            contador++;
        }else{
            input.classList.remove("required");
            input.classList.add("validated");
        }
        // agregas el valor de los input al arreglo
        informacion.push(value);
    
    });
    
    if(contador == 0){
        // Estas 2 lineas van tal cual como estan aca (informacio es el arreglo que creaste arriba)
        let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"})
        // form.txt es el nombre del archivo que se descarga podes poner pepe.text
        saveAs(blob, "contact-form.txt")
    }
})