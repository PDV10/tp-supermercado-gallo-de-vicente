"use strict";

/*---------------------------------------------- Products ---------------------------------------------------------------------------*/

let products = [
  // category Beverages
  new Product(1, "Vino Rutini Cabernet Malbec estuche con 2 unidades", 28776.14, 20, 6, "./assets/img-productos/bebidas/vino.png"),
  new Product(2, "Cerveza Quilmes 6 pack", 6000.00, 30, 6, "./assets/img-productos/bebidas/cerveza.png"),
  new Product(3, "Fernet Branca 750ml", 12000.00, 15, 6, "./assets/img-productos/bebidas/fernet.png"),
  new Product(4, "Espumante Chandon Extra Brut 750ml", 35000.00, 25, 6, "./assets/img-productos/bebidas/chandon.png"),
  new Product(5, "Vino Malbec Bodega Norton 750ml", 28000.00, 10, 6, "./assets/img-productos/bebidas/vino-norton.png"),
  new Product(6, "Gaseosa Coca-Cola 2.5L", 2200.00, 40, 6, "./assets/img-productos/bebidas/coca.png"),
  new Product(7, "Agua Mineral Villavicencio 1.5L", 1500.00, 50, 6, "./assets/img-productos/bebidas/agua.png"),
  new Product(8, "Jugo de Naranja 1L", 1800.00, 35, 6, "./assets/img-productos/bebidas/bagio.png"),
  new Product(9, "Sidra El Gaitero 750ml", 2500.00, 20, 6, "./assets/img-productos/bebidas/sidra.png"),
  new Product(10, "Vino Torrontés Bodega Trapiche 750ml", 29500.00, 18, 6, "./assets/img-productos/bebidas/vino-blanco.png"),
  new Product(11, "Licor Amarula 500ml", 15000.00, 12, 6, "./assets/img-productos/bebidas/licorAmarula.png"),
  // Categoría Fruits and Vegetables (id: 0)
  new Product(12, "Manzanas Granny Smith (kg)", 300.00, 50, 0, "./assets/img-productos/frutas-vegetales/manzana.png"),
  new Product(13, "Naranjas (kg)", 250.00, 40, 0, "./assets/img-productos/frutas-vegetales/naranja.png"),
  new Product(14, "Peras Pack (kg)", 280.00, 30, 0, "./assets/img-productos/frutas-vegetales/peras.png"),
  new Product(15, "Tomates (kg)", 220.00, 25, 0, "./assets/img-productos/frutas-vegetales/tomate.png"),
  new Product(16, "Lechuga (unidad)", 150.00, 60, 0, "./assets/img-productos/frutas-vegetales/lechuga.png"),
  new Product(17, "Zanahorias (kg)", 200.00, 55, 0, "./assets/img-productos/frutas-vegetales/zanahoria.png"),
  new Product(18, "Papas (kg)", 270.00, 45, 0, "./assets/img-productos/frutas-vegetales/papa.png"),
  new Product(19, "Cebollas (kg)", 240.00, 50, 0, "./assets/img-productos/frutas-vegetales/cebolla.png"),
  new Product(20, "Aguacates (unidad)", 180.00, 35, 0, "./assets/img-productos/frutas-vegetales/palta.png"),
  new Product(21, "Espinacas (kg)", 320.00, 20, 0, "./assets/img-productos/frutas-vegetales/espinaca.png"),
    // Categoría Meats and Fish (id: 1)
  new Product(22, "Asado de Tira (kg)", 1600.00, 25, 1, "./assets/img-productos/carne-pescados/Asado de Tira (kg).png"),
  new Product(23, "Bife de Chorizo (kg)", 2000.00, 20, 1, "./assets/img-productos/carne-pescados/Bife de Chorizo (kg).png"),
  new Product(24, "Vacío (kg)", 1800.00, 30, 1, "./assets/img-productos/carne-pescados/Vacío (kg).png"),
  new Product(25, "Pechuga de Pollo (kg)", 1000.00, 40, 1, "./assets/img-productos/carne-pescados/Pechuga de Pollo (kg).png"),
  new Product(26, "Milanesa de Ternera (kg)", 1500.00, 25, 1, "./assets/img-productos/carne-pescados/Milanesa de Ternera (kg).png"),
  new Product(27, "Lomo de Cerdo (kg)", 1700.00, 15, 1, "./assets/img-productos/carne-pescados/Lomo de Cerdo (kg).png"),
  new Product(28, "Filete de Merluza (kg)", 1300.00, 30, 1, "./assets/img-productos/carne-pescados/Merluza.png"),
  new Product(29, "Calamares (kg)", 2200.00, 20, 1, "./assets/img-productos/carne-pescados/Calamares (kg).png"),
  new Product(30, "Chorizo (kg)", 1400.00, 25, 1, "./assets/img-productos/carne-pescados/Chorizo (kg).png"),
  new Product(31, "Costillas de Cerdo (kg)", 1500.00, 20, 1, "./assets/img-productos/carne-pescados/Costillas de Cerdo (kg).png"),
  // Categoría Dairy and Eggs (id: 2)
  new Product(32, "Leche Entera La Serenísima 1L", 200.00, 50, 2, "./assets/img-productos/huevos-lacteos/Leche Entera La Serenísima 1L.png"),
  new Product(33, "Queso Cremoso La Serenísima 200g", 350.00, 30, 2, "./assets/img-productos/huevos-lacteos/Queso Cremoso La Serenísima 200g.png"),
  new Product(34, "Yogur Natural La Serenísima 1kg", 300.00, 40, 2, "./assets/img-productos/huevos-lacteos/Yogur Natural La Serenísima 1kg.png"),
  new Product(35, "Manteca La Serenísima 200g", 250.00, 25, 2, "./assets/img-productos/huevos-lacteos/Manteca La Serenísima 200g.png"),
  new Product(36, "Huevos (docena)", 400.00, 60, 2, "./assets/img-productos/huevos-lacteos/Huevos (docena).png"),
  // Categoría Bakery and Pastry (id: 3)
  new Product(37, "Pan de Miga (kg)", 250.00, 40, 3, "./assets/img-productos/panaderia-pasteleria/Pan lactal.png"),
  new Product(38, "Medialunas (pack de 6)", 350.00, 30, 3, "./assets/img-productos/panaderia-pasteleria/Medialunas (pack de 6).png"),
  new Product(39, "Facturas Variadas (kg)", 400.00, 25, 3, "./assets/img-productos/panaderia-pasteleria/Facturas Variadas (kg).png"),
  new Product(40, "Bizcochos (kg)", 300.00, 35, 3, "./assets/img-productos/panaderia-pasteleria/Bizcochos (kg).png"),
  new Product(41, "Pan Integral (kg)", 270.00, 20, 3, "./assets/img-productos/panaderia-pasteleria/Pan Integral (kg).png"),
  // Categoría Frozen Foods (id: 4)
  new Product(42, "Papas Fritas Congeladas (kg)", 350.00, 30, 4, "./assets/img-productos/congelados/Papas Fritas Congeladas (kg).png"),
  new Product(43, "Hamburguesas Congeladas (pack de 4)", 600.00, 20, 4, "./assets/img-productos/congelados/Hamburguesas Congeladas (pack de 4).png"),
  new Product(44, "Empanadas Congeladas (pack de 12)", 500.00, 25, 4, "./assets/img-productos/congelados/Empanadas Congeladas (pack de 12).png"),
  new Product(45, "Pizza Congelada (unidad)", 700.00, 15, 4, "./assets/img-productos/congelados/Papas Fritas Congeladas (kg).png"),
  new Product(46, "Pechugas de Pollo Congeladas (kg)", 1000.00, 20, 4, "./assets/img-productos/congelados/Pechugas de Pollo Congeladas (kg).png"),
  // Categoría Despensa (id: 5)
  new Product(47, "Arroz 1kg", 300.00, 50, 5, "./assets/img-productos/despensa/Arroz 1kg.png"),
  new Product(48, "Azúcar 1kg", 250.00, 45, 5, "./assets/img-productos/despensa/Azúcar 1kg.png"),
  new Product(49, "Harina 1kg", 280.00, 55, 5, "./assets/img-productos/despensa/Harina 1kg.png"),
  new Product(50, "Lentejas 1kg", 350.00, 40, 5, "./assets/img-productos/despensa/Lentejas.png"),
  new Product(51, "Aceite de Maíz 1L", 450.00, 30, 5, "./assets/img-productos/despensa/Aceite.png"), 
  // Categoría Snacks and Sweets (id: 7)
  new Product(52, "Alfajor Havanna Chocolate", 500.00, 50, 7, "./assets/img-productos/snacks-golosinas/Alfajor Havanna Chocolate.png"),
  new Product(53, "Galletitas Chocolinas 170g", 350.00, 60, 7, "./assets/img-productos/snacks-golosinas/Galletitas Chocolinas 170g.png"),
  new Product(54, "Caramelos Sugus Pack 150g", 150.00, 70, 7, "./assets/img-productos/snacks-golosinas/Caramelos Sugus Pack 150g.png"),
  new Product(55, "Papas Fritas Lays 145g", 450.00, 40, 7, "./assets/img-productos/snacks-golosinas/Papas Fritas Lays 145g.png"),
  new Product(56, "Chocolates Aguila 150g", 700.00, 30, 7, "./assets/img-productos/snacks-golosinas/Chocolates Aguila 150g.png"),
  // Categoría Cleaning Products (id: 8)
  new Product(57, "Detergente Ala Ultra 1L", 350.00, 80, 8, "./assets/img-productos/productos-limpieza/DetergenteAlaUltra1L.png"),
  new Product(58, "Lavandina Ayudín 1L", 120.00, 100, 8, "./assets/img-productos/productos-limpieza/LavandinaAyudín1L.png"),
  new Product(59, "Esponja Multiuso Scotch-Brite", 200.00, 50, 8, "./assets/img-productos/productos-limpieza/EsponjaMultiuso.png"),
  new Product(60, "Jabón en Polvo Skip 800g", 450.00, 45, 8, "./assets/img-productos/productos-limpieza/JabónPolvoSkip.png"),
  new Product(61, "Limpiador Cif Crema 500ml", 380.00, 60, 8, "./assets/img-productos/productos-limpieza/LimpiadorCifCrema500ml.png"),
  // Categoría Hygiene and Personal Care (id: 9)
  new Product(62, "Shampoo Pantene 400ml", 750.00, 40, 9, "./assets/img-productos/higienePersonal/ShampooPantene400ml.png"),
  new Product(63, "Pasta Dental Colgate Triple Acción 90g", 150.00, 100, 9, "./assets/img-productos/higienePersonal/PastaDentalColgate.png"),
  new Product(64, "Desodorante Rexona Aerosol 150ml", 350.00, 70, 9, "./assets/img-productos/higienePersonal/DesodoranteRexonaAerosol.png"),
  new Product(65, "Jabón de Tocador Dove 90g", 120.00, 90, 9, "./assets/img-productos/higienePersonal/JabónTocadorDove.png"),
  new Product(66, "Papel Higiénico Elite 4 Rollos", 400.00, 75, 9, "./assets/img-productos/higienePersonal/PapelHigiénico.png")
];


let productCategories = [
  { category: "Fruits and Vegetables", id: 0 },
  { category: "Meats and Fish", id: 1 },
  { category: "Dairy and Eggs", id: 2 },
  { category: "Bakery and Pastry", id: 3 },
  { category: "Frozen Foods", id: 4 },
  { category: "Pantry", id: 5 },
  { category: "Drinks", id: 6 },
  { category: "Snacks and Sweets", id: 7 },
  { category: "Cleaning Products", id: 8 },
  { category: "Hygiene and Personal Care", id: 9 },
];

let cart = [];

function showCategories() {
  // Select the container where the category list will be displayed
  let listProducts = document.querySelector(".list-product");
  if(listProducts){
    // Loop through each category object in productCategories
    productCategories.forEach((categoryObj) => {
      // Create a <li> element for each category
      let liElement = document.createElement("li");
      liElement.id = `category-${categoryObj.id}`;
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
}

/* --------------------------------------------------------- ShowProducts -------------------------------------------------- */

function showProducts(categoryId) {
  // Clear the card container before adding new ones
  let containerCards = document.getElementById("container-cards");
    if(containerCards) {
    let lastLi = document.querySelector(".li-active");
    if(lastLi) lastLi.classList.remove("li-active");
    
    let liCurrent = document.getElementById(`category-${categoryId}`);
    liCurrent.classList.add("li-active");  
    if(containerCards){
      containerCards.innerHTML = "";

      // Filter the products to get only those that belong to the selected category
      let productsByCategory = products.filter(
        (product) => product.category === categoryId
      );

      // Iterate over the filtered products and create the cards
      productsByCategory.forEach((product) => {
        // Create the main container for the card
        let cardDiv = document.createElement("div");
        cardDiv.className = "card animacion border-green align-items-center";
        cardDiv.style.width = "18rem";
        cardDiv.id = `cardDiv-${product.id}`;

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
        pElement.id = `price-${product.id}`;

        // Create the purchase button
        let addToCartButton = document.createElement("button");
        addToCartButton.type = "button";
        addToCartButton.className = "btn-addToCart";
        addToCartButton.id = product.id;
        addToCartButton.textContent = "Add to Cart";

        if(product.stock === 0){
          addToCartButton.setAttribute("disabled",true);
          quantityInput.value = 0;
          pElement.innerText = "Sin Stock"
          
          cardDiv.classList.remove("animacion");
          cardDiv.classList.add("withOutStock");
        }

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
        asingEventClickToButtons();
      }
    }
}

  showCategories();
  showProducts(productCategories[0].id);

/* --------------------------------------------------------- CART ----------------------------------------------------------- */

function asingEventClickToButtons(){
    // Get all buttons with "btn-addToCart" class
  let btnsAddToCart = document.querySelectorAll(".btn-addToCart");

  // if this array of buttons are diferent of null 
  if(btnsAddToCart){
    btnsAddToCart.forEach(btn => {
      btn.addEventListener("click", (e) =>{
        e.preventDefault();
        // Get id of the button
        let idBtn =  btn.getAttribute("id");
        console.log("Apreto btn: " + idBtn);
        // Call to function add product with id button by parameter
        addProductToCart(idBtn);
      })
  });
}}




function addProductToCart(id){
  // Get the quantity of the input quantity
  let quantity = document.querySelector(`#input-quantity-${id}`)
  // Look for a product on the array object who id is equals to parameter id
  let prod = products.find(product => product.id == id);

  if(cart.length > 0){
    let pInfoCart = document.querySelector("#cart-message");
  }

  // Create product to add to cart
  let productToAdd = {
    "id": id,
    "name": prod.name,
    "price": prod.price,
    "quantity": quantity.value,
    "category": prod.category,
    "img": prod.img
  }

  // add product tu cart
  if(prod.stock > 0 && quantity.value<=prod.stock ){

    cart.push(productToAdd);
    
    // update stock in object
    prod.stock -= quantity.value;
    
    // Get Dom element to show quantity of items inside the cart
    let cartLengthIcon = document.getElementById("itemsInCart");
    cartLengthIcon.innerText = cart.length;
    if(cart.length >0){
      // Remove the class d-none to make it visible
      cartLengthIcon.classList.remove("d-none");
    }
    showCartProducts();
    quantity.value = 1;
  }else{
    let card = document.getElementById(`cardDiv-${id}`);
    let cardPrice = document.getElementById(`price-${id}`);
    let btnCard = document.getElementById(`${id}`);
    btnCard.setAttribute("disabled",true);
    cardPrice.innerText = "Sin Stock"
    quantity.value = 0;
    card.classList.remove("animacion");
    card.classList.add("withOutStock");
    
  }
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
    let productNameElement = document.createElement("p");
    productNameElement.className = "product-name";
    productNameElement.textContent = product.name;

    // Create a small element for the product price and quantity
    let productInfoElement = document.createElement("p");
    productInfoElement.textContent = `Price: $${product.price.toFixed(2)} x ${product.quantity}`;
    productInfoElement.className = "product-info";

    let productTotalPriceElement = document.createElement("p");
    let totalPrice = product.price*product.quantity;
    productTotalPriceElement.textContent = `Total: $${totalPrice}`;
    productTotalPriceElement.className = "product-info";

    // Append the elements to the div
    divElement.appendChild(productNameElement);
    divElement.appendChild(productInfoElement);
    divElement.appendChild(productTotalPriceElement);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-cart")

    let img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    
    imgContainer.appendChild(img);

    let btnDelete = document.createElement("button");

    btnDelete.classList.add("btn-detele")
    btnDelete.id = product.id;
    btnDelete.innerText = "X";

    /* let span = document.createElement("span");
    span.innerText = "X";
       
    
    btnDelete.appendChild(span)
    */

    // Append the div to the li
    liElement.appendChild(divElement);
    liElement.appendChild(imgContainer);
    liElement.appendChild(btnDelete) 

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
  
  deleteItem()
}

function deleteItem(){


    let btnDetele = document.querySelectorAll(".btn-detele");
    let cartLengthIcon = document.getElementById("itemsInCart");
    if (btnDetele) {
    
    btnDetele.forEach(btn => {
      btn.addEventListener("click", ()=>{
        let btnId = parseInt(btn.getAttribute("id"));
        console.log(btnId);
        
        let itemsCart = cart.filter( item => item.id != btnId);
   
       cart = [];

        itemsCart.forEach(itemCart => {
          cart.push(itemCart)
          
        });
        
        showCartProducts();
      
        
        
      })
    })
  }
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
      informacion = [];
    }
  });
}