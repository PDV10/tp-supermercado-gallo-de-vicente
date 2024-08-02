"use strict";

/*---------------------------------------------- Products ---------------------------------------------------------------------------*/

let products = [
  new Product(
    0, //id
    "Vino Rutini Cabernet Malbec estuche con 2 unidades", // Name
    28776.14, // Price
    20, // Stock
    6,  // CategoryId
    "https://http2.mlstatic.com/D_NQ_NP_2X_931887-MLA45997494438_052021-F.webp" // Img
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

let cart = [];

function showCategories() {
  // Select the container where the category list will be displayed
  let listProducts = document.querySelector(".list-product");

  // Loop through each category object in productCategories
  productCategories.forEach((categoryObj) => {
    // Create a <li> element for each category
    let liElement = document.createElement("li");

    // Create an <a> element inside the <li> element
    let aElement = document.createElement("a");
    aElement.className = "element-product"; // Assign the class name
    aElement.setAttribute("data-category-id", categoryObj.id); // Set a custom attribute to store the category ID
    aElement.textContent = categoryObj.category; // Set the category name as the link text

    // Append the <a> element inside the <li> element
    liElement.appendChild(aElement);

    // Append the <li> element to the list container
    listProducts.appendChild(liElement);
  });

  // Add click event listeners to each <a> element with the class 'element-product'
  document.querySelectorAll(".element-product").forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      let categoryId = parseInt(this.getAttribute("data-category-id")); // Get the category ID from the data attribute
      showProducts(categoryId); // Call the function to show products for the selected category
    });
  });
}

/* --------------------------------------------------------- ShowProducts -------------------------------------------------- */

function showProducts(categoryId) {
  // Clear the card container before adding new ones
  let containerCards = document.getElementById("container-cards");
  containerCards.innerHTML = "";

  // Filter the products to get only those that belong to the selected category
  let productsByCategory = products.filter(
    (product) => product.category === categoryId
  );

  // Iterate over the filtered products and create the cards
  productsByCategory.forEach((product) => {
    // Create the main container for the card
    let cardDiv = document.createElement("div");
    cardDiv.className = "card border-green align-items-center";
    cardDiv.style.width = "18rem";

    // Create the image element and set it up
    let cardImg = document.createElement("img");
    cardImg.src = `${product.img}`;
    cardImg.className = "card-img-top";

    // Create the container for the card body
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body border-top-black m-2";

    // Create the card title
    let h6Element = document.createElement("h6");
    h6Element.textContent = `${product.name}`;

    // Create the container for the increment/decrement buttons and the quantity input
    let numberInputDiv = document.createElement("div");
    numberInputDiv.className = "number-input m-1";

    // Create the button to decrement the quantity value
    let decrementButton = document.createElement("button");
    decrementButton.id = `btn-decrement-${product.id}`;
    decrementButton.textContent = "-";

    // Create the input to enter the product quantity
    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.id = `input-quantity-${product.id}`;
    quantityInput.min = 0;
    quantityInput.className = "input-quantity-product";

    // Create the button to increment the quantity value
    let incrementButton = document.createElement("button");
    incrementButton.id = `btn-increment-${product.id}`;
    incrementButton.textContent = "+";

    // Create the paragraph element to display the product price
    let pElement = document.createElement("p");
    pElement.className = "card-product-price m-1";
    pElement.textContent = `$${product.price}`;

    // Create the purchase button
    let addToCartButton = document.createElement("button");
    addToCartButton.type = "button";
    addToCartButton.className = "btn-addToCart";
    addToCartButton.id = product.id;
    addToCartButton.textContent = "Add to Cart";

    // Append the elements to the DOM in the correct order
    numberInputDiv.appendChild(decrementButton);
    numberInputDiv.appendChild(quantityInput);
    numberInputDiv.appendChild(incrementButton);

    cardBodyDiv.appendChild(h6Element);
    cardBodyDiv.appendChild(numberInputDiv);
    cardBodyDiv.appendChild(pElement);
    cardBodyDiv.appendChild(addToCartButton);

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBodyDiv);

    containerCards.appendChild(cardDiv);

  });

  // Assign click events to the increment and decrement buttons
    productsByCategory.forEach((product) => {
      let inputQuantity = document.getElementById(`input-quantity-${product.id}`);

      let btnDecrement = document.getElementById(`btn-decrement-${product.id}`);
      btnDecrement.addEventListener("click", (e) => {
        e.preventDefault();
        let currentValue = parseInt(inputQuantity.value);
        if (currentValue > 0) inputQuantity.value = currentValue - 1;
      });
      
      let btnIncrement = document.getElementById(`btn-increment-${product.id}`);
      btnIncrement.addEventListener("click", () => {
        let currentValue = parseInt(inputQuantity.value);
        if(currentValue+1 <= product.stock){
          inputQuantity.value = currentValue + 1;
        }else{
          console.log("Maximo stock alcanzado");
        }
      });

      inputQuantity.addEventListener("keyup",() =>{
        let value = inputQuantity.value;
        if(value > product.stock){
          inputQuantity.value = product.stock;
        }
      })


    });
  
}

  showCategories();
  showProducts(productCategories[6].id);

/* --------------------------------------------------------- CART ----------------------------------------------------------- */

// Get all buttons with "btn-addToCart" class
let btnsAddToCart = document.querySelectorAll(".btn-addToCart");

// if this array of buttons are diferent of null 
if(btnsAddToCart){
  btnsAddToCart.forEach(btn => {
    btn.addEventListener("click", (e) =>{
      e.preventDefault();
      // Get id of the button
      let idBtn =  btn.getAttribute("id");
      // Call to function add product with id button by parameter
      addProductToCart(idBtn);
    })
});
}

function addProductToCart(id){
  // Get the quantity of the input quantity
  let quantity = document.querySelector(`#input-quantity-${id}`).value
  // Look for a product on the array object who id is equals to parameter id
  let prod = products.find(product => product.id == id)

  // Create product to add to cart
  let productToAdd = {
    "id": id,
    "name": prod.name,
    "price": prod.price,
    "quantity": quantity,
    "category": prod.category,
    "img": prod.img
  }

  // add product tu cart
  cart.push(productToAdd);

  // update stock in object
  prod.stock -= quantity;

  // Get Dom element to show quantity of items inside the cart
  let cartLengthIcon = document.getElementById("itemsInCart");
  cartLengthIcon.innerText = cart.length;
  if(cart.length >0){
    // Remove the class d-none to make it visible
    cartLengthIcon.classList.remove("d-none");
  }
  showCartProducts();
  /*  console.log(cart); */
}

function showCartProducts(){
  // Get the modal body div
  let modalBodyDiv = document.querySelector(".modal-body");
  modalBodyDiv.innerHTML = "";

  // Get the cart product list ul
  let ulElement = document.getElementById("list-cart-products");
  // Get the p element to display the total 
  let pElement = document.getElementById("p-total");

  // Check if these elements have already been created
  if(ulElement == null && pElement == null){
    // If not, create them
    ulElement = document.createElement("ul");
    ulElement.className = "list-group list-group-flush";
    ulElement.id = "list-cart-products";
  
    pElement = document.createElement("p");
    pElement.className = "text-end badge  bg-primary rounded ";
    pElement.id = "p-total";
  }
    
  let total = 0;
  cart.forEach(product => {
    // Create the li element to display product info
    let liElement = document.createElement("li");
    liElement.className = "list-group-item";

    // Create a div to hold the product info
    let divElement = document.createElement("div");

    // Create a strong element for the product name
    let productNameElement = document.createElement("strong");
    productNameElement.textContent = product.name;

    // Create a br element for spacing
    let brElement = document.createElement("br");

    // Create a small element for the product price and quantity
    let productInfoElement = document.createElement("small");
    productInfoElement.textContent = `Price: $${product.price.toFixed(2)} x ${product.quantity}`;

    // Append the elements to the div
    divElement.appendChild(productNameElement);
    divElement.appendChild(brElement);
    divElement.appendChild(productInfoElement);

    // Append the div to the li
    liElement.appendChild(divElement);

    // Calculate the total cost
    total += product.price * product.quantity;

    // Append the li to the ul
    ulElement.appendChild(liElement);
  });

  // Update the total in the p element
  pElement.textContent = `Total: $${total.toFixed(2)}`;

  // Append the ul and p to the modal body
  modalBodyDiv.appendChild(ulElement);
  modalBodyDiv.appendChild(pElement);
}


/*---------------------------------------------- Contact ---------------------------------------------------------------------------*/

// Obtenes el boton del form
let btnEnviar = document.getElementById("btnEnviar");

// Creas un arreglo vacio
let informacion = [];

// cuando se hace click en el boton
if(btnEnviar){

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
}
  