"use strict";

/*---------------------------------------------- Products ---------------------------------------------------------------------------*/

let products = [
  new Product(
    0,
    "Vino Rutini Cabernet Malbec estuche con 2 unidades",
    28776.14,
    20,
    6,
    "https://http2.mlstatic.com/D_NQ_NP_2X_931887-MLA45997494438_052021-F.webp"
  ),
];

let productCategories = [
  { category: "Frutas y Verduras", id: 0 },
  { category: "Carnes y Pescados", id: 1 },
  { category: "Lácteos y Huevos", id: 2 },
  { category: "Panadería y Pastelería", id: 3 },
  { category: "Congelados", id: 4 },
  { category: "Despensa", id: 5 },
  { category: "Bebidas", id: 6 },
  { category: "Snacks y Dulces", id: 7 },
  { category: "Productos de Limpieza", id: 8 },
  { category: "Higiene y C. Personal", id: 9 },
];

function showCategories() {
  let listProducts = document.querySelector(".list-product");
  listProducts.innerHTML = "";
  productCategories.forEach((categoryObj) => {
    console.log(categoryObj);
    listProducts.innerHTML += `<li><a class="element-product" data-category-id="${categoryObj.id}" href="#">${categoryObj.category}</a></li>`;
  });

  document.querySelectorAll(".element-product").forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      let categoryId = parseInt(this.getAttribute("data-category-id"));
      showProducts(categoryId);
    });
  });
}

function showProducts(categoryId) {
  console.log("Category ID selected: " + categoryId);
  let containerCards = document.getElementById("container-cards");
  containerCards.innerHTML = "";

  let productsByCategory = products.filter(
    (product) => product.category === categoryId
  );

  productsByCategory.forEach((product) => {
    containerCards.innerHTML += `
        <div class="card border-green align-items-center" style="width: 18rem;">
          <img src="${product.img}" class="card-img-top" alt="...">
          <div class="card-body border-top-black m-2">
            <h6 class="card-title">${product.name}</h6>
            <div class="number-input m-1">
              <button id="btn-decrement-${product.id}">-</button>
              <input type="number" id="input-quantity-${product.id}" min="0" value="1" name="" class="input-quantity-product">
              <button id="btn-increment-${product.id}">+</button>
            </div>
            <p class="card-product-price m-1">$${product.price}</p>
            <button type="button" class="btn-buy">Comprar</button>
          </div>
        </div>
      `;
  });


  productCategories.forEach((product) =>{
    document.getElementById(`btn-decrement-${product.id}`).addEventListener("click", () =>{
        let input = document.getElementById(`input-quantity-${product.id}`)
        let currentValue = parseInt(input.value);
        if(currentValue > 0) input.value = currentValue - 1;
    })
    document.getElementById(`btn-increment-${product.id}`).addEventListener('click', () => {
        let input = document.getElementById(`input-quantity-${product.id}`);
        let currentValue = parseInt(input.value);
        input.value = currentValue + 1;
      });
  })
}

showCategories();
showProducts(productCategories[6].id);

/*---------------------------------------------- Contact ---------------------------------------------------------------------------*/

// Obtenes el boton del form
let btnEnviar = document.getElementById("btnEnviar");

// Creas un arreglo vacio
let informacion = [];

// cuando se hace click en el boton
btnEnviar.addEventListener("click", (e) => {
  // prevenis que se recarge la pag
  e.preventDefault();
  let inputs = document.querySelectorAll(".inputContact");
  let contador = 0;
  inputs.forEach((input) => {
    let value = input.value;

    if (value == "") {
      input.classList.remove("validated");
      input.classList.add("required");

      contador++;
    } else {
      input.classList.remove("required");
      input.classList.add("validated");
    }
    // agregas el valor de los input al arreglo
    informacion.push(value);
  });

  if (contador == 0) {
    // Estas 2 lineas van tal cual como estan aca (informacio es el arreglo que creaste arriba)
    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });
    // form.txt es el nombre del archivo que se descarga podes poner pepe.text
    saveAs(blob, "contact-form.txt");
  }
});

