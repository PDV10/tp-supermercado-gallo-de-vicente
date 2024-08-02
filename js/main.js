"use strict";

/*---------------------------------------------- Products ---------------------------------------------------------------------------*/

let products = [
  // category Beverages
  new Product(1, "Vino Rutini Cabernet Malbec estuche con 2 unidades", 28776.14, 20, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_931887-MLA45997494438_052021-F.webp"),
  new Product(2, "Cerveza Quilmes 6 pack", 6000.00, 30, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_955320-MLA45529186585_042021-F.webp"),
  new Product(3, "Fernet Branca 750ml", 12000.00, 15, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_976460-MLA46694964780_072021-F.webp"),
  new Product(4, "Espumante Chandon Extra Brut 750ml", 35000.00, 25, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_925483-MLA46821636226_072021-F.webp"),
  new Product(5, "Vino Malbec Bodega Norton 750ml", 28000.00, 10, 6, "../assets/vino.png"),
  new Product(6, "Gaseosa Coca-Cola 2.5L", 2200.00, 40, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_947015-MLA44958670724_022021-F.webp"),
  new Product(7, "Agua Mineral Villavicencio 1.5L", 1500.00, 50, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_974347-MLA46620393929_072021-F.webp"),
  new Product(8, "Jugo de Naranja 1L", 1800.00, 35, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_940781-MLA45981436401_052021-F.webp"),
  new Product(9, "Sidra El Gaitero 750ml", 2500.00, 20, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_976825-MLA46722267986_072021-F.webp"),
  new Product(10, "Vino Torrontés Bodega Trapiche 750ml", 29500.00, 18, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_964338-MLA47422845518_092021-F.webp"),
  new Product(11, "Licor Amarula 500ml", 15000.00, 12, 6, "https://http2.mlstatic.com/D_NQ_NP_2X_941172-MLA46322761432_062021-F.webp"),
  // Categoría Fruits and Vegetables (id: 0)
  new Product(12, "Manzanas Granny Smith (kg)", 300.00, 50, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_945500-MLA45372223354_042021-F.webp"),
  new Product(13, "Naranjas (kg)", 250.00, 40, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_947698-MLA45886325985_052021-F.webp"),
  new Product(14, "Peras Pack (kg)", 280.00, 30, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_961809-MLA46022427509_052021-F.webp"),
  new Product(15, "Tomates (kg)", 220.00, 25, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_950104-MLA45334899348_032021-F.webp"),
  new Product(16, "Lechuga (unidad)", 150.00, 60, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_963672-MLA45905369773_052021-F.webp"),
  new Product(17, "Zanahorias (kg)", 200.00, 55, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_961186-MLA45888592885_052021-F.webp"),
  new Product(18, "Papas (kg)", 270.00, 45, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_950738-MLA45570250986_032021-F.webp"),
  new Product(19, "Cebollas (kg)", 240.00, 50, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_952065-MLA45383545995_032021-F.webp"),
  new Product(20, "Aguacates (unidad)", 180.00, 35, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_947291-MLA45765822387_052021-F.webp"),
  new Product(21, "Espinacas (kg)", 320.00, 20, 0, "https://http2.mlstatic.com/D_NQ_NP_2X_944200-MLA45622495161_042021-F.webp"),
    // Categoría Meats and Fish (id: 1)
  new Product(22, "Asado de Tira (kg)", 1600.00, 25, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_951789-MLA45498413996_032021-F.webp"),
  new Product(23, "Bife de Chorizo (kg)", 2000.00, 20, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_962112-MLA46077590727_052021-F.webp"),
  new Product(24, "Vacío (kg)", 1800.00, 30, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_953221-MLA45976625671_052021-F.webp"),
  new Product(25, "Pechuga de Pollo (kg)", 1000.00, 40, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_949476-MLA45482386271_032021-F.webp"),
  new Product(26, "Milanesa de Ternera (kg)", 1500.00, 25, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_949943-MLA45316566505_032021-F.webp"),
  new Product(27, "Lomo de Cerdo (kg)", 1700.00, 15, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_954101-MLA45663146781_042021-F.webp"),
  new Product(28, "Filete de Merluza (kg)", 1300.00, 30, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_944778-MLA45883506184_042021-F.webp"),
  new Product(29, "Calamares (kg)", 2200.00, 20, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_963549-MLA45987357813_052021-F.webp"),
  new Product(30, "Chorizo (kg)", 1400.00, 25, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_961075-MLA45631605836_042021-F.webp"),
  new Product(31, "Costillas de Cerdo (kg)", 1500.00, 20, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_956764-MLA45654653700_042021-F.webp"),
  // Categoría Dairy and Eggs (id: 2)
  new Product(32, "Leche Entera La Serenísima 1L", 200.00, 50, 2, "https://http2.mlstatic.com/D_NQ_NP_2X_961107-MLA45794534072_052021-F.webp"),
  new Product(33, "Queso Cremoso La Serenísima 200g", 350.00, 30, 2, "https://http2.mlstatic.com/D_NQ_NP_2X_945503-MLA45367511761_042021-F.webp"),
  new Product(34, "Yogur Natural La Serenísima 1kg", 300.00, 40, 2, "https://http2.mlstatic.com/D_NQ_NP_2X_944805-MLA45622420750_042021-F.webp"),
  new Product(35, "Manteca La Serenísima 200g", 250.00, 25, 2, "https://http2.mlstatic.com/D_NQ_NP_2X_950804-MLA45378297515_032021-F.webp"),
  new Product(36, "Huevos (docena)", 400.00, 60, 2, "https://http2.mlstatic.com/D_NQ_NP_2X_952418-MLA45648325435_042021-F.webp"),
  // Categoría Bakery and Pastry (id: 3)
  new Product(37, "Pan de Miga (kg)", 250.00, 40, 3, "https://http2.mlstatic.com/D_NQ_NP_2X_945516-MLA45366262694_042021-F.webp"),
  new Product(38, "Croissants (pack de 6)", 350.00, 30, 3, "https://http2.mlstatic.com/D_NQ_NP_2X_951817-MLA45489778812_032021-F.webp"),
  new Product(39, "Facturas Variadas (kg)", 400.00, 25, 3, "https://http2.mlstatic.com/D_NQ_NP_2X_951746-MLA45567682894_032021-F.webp"),
  new Product(40, "Bizcochos (kg)", 300.00, 35, 3, "https://http2.mlstatic.com/D_NQ_NP_2X_951358-MLA45508921372_032021-F.webp"),
  new Product(41, "Pan Integral (kg)", 270.00, 20, 3, "https://http2.mlstatic.com/D_NQ_NP_2X_952736-MLA45650354815_042021-F.webp"),
  // Categoría Frozen Foods (id: 4)
  new Product(42, "Papas Fritas Congeladas (kg)", 350.00, 30, 4, "https://http2.mlstatic.com/D_NQ_NP_2X_946692-MLA45731956985_052021-F.webp"),
  new Product(43, "Hamburguesas Congeladas (pack de 4)", 600.00, 20, 4, "https://http2.mlstatic.com/D_NQ_NP_2X_946695-MLA45685478571_052021-F.webp"),
  new Product(44, "Empanadas Congeladas (pack de 12)", 500.00, 25, 4, "https://http2.mlstatic.com/D_NQ_NP_2X_944329-MLA45571079545_052021-F.webp"),
  new Product(45, "Pizza Congelada (unidad)", 700.00, 15, 4, "https://http2.mlstatic.com/D_NQ_NP_2X_955783-MLA45673990286_052021-F.webp"),
  new Product(46, "Pechugas de Pollo Congeladas (kg)", 1000.00, 20, 4, "https://http2.mlstatic.com/D_NQ_NP_2X_946698-MLA45616264367_052021-F.webp"),
  // Categoría Despensa (id: 5)
  new Product(47, "Arroz 1kg", 300.00, 50, 5, "https://http2.mlstatic.com/D_NQ_NP_2X_953257-MLA45596094582_032021-F.webp"),
  new Product(48, "Azúcar 1kg", 250.00, 45, 5, "https://http2.mlstatic.com/D_NQ_NP_2X_960972-MLA45885578341_052021-F.webp"),
  new Product(49, "Harina 1kg", 280.00, 55, 5, "https://http2.mlstatic.com/D_NQ_NP_2X_953622-MLA45383872672_032021-F.webp"),
  new Product(50, "Lentejas 1kg", 350.00, 40, 5, "https://http2.mlstatic.com/D_NQ_NP_2X_951547-MLA45596767429_032021-F.webp"),
  new Product(51, "Aceite de Maíz 1L", 450.00, 30, 5, "https://http2.mlstatic.com/D_NQ_NP_2X_952058-MLA45573737384_032021-F.webp"), 
  // Categoría Snacks and Sweets (id: 7)
  new Product(52, "Alfajor Havanna Chocolate", 500.00, 50, 7, "https://http2.mlstatic.com/D_NQ_NP_951507-MLA52136925843_102022-O.webp"),
  new Product(53, "Galletitas Chocolinas 170g", 350.00, 60, 7, "https://http2.mlstatic.com/D_NQ_NP_741068-MLA49626644488_042022-O.webp"),
  new Product(54, "Caramelos Sugus Pack 150g", 150.00, 70, 7, "https://http2.mlstatic.com/D_NQ_NP_942761-MLA51862807307_102022-O.webp"),
  new Product(55, "Papas Fritas Lays 145g", 450.00, 40, 7, "https://http2.mlstatic.com/D_NQ_NP_690259-MLA51873216380_102022-O.webp"),
  new Product(56, "Chocolates Aguila 150g", 700.00, 30, 7, "https://http2.mlstatic.com/D_NQ_NP_764246-MLA45754768066_042021-O.webp"),
  // Categoría Cleaning Products (id: 8)
  new Product(57, "Detergente Ala Ultra 1L", 350.00, 80, 8, "https://http2.mlstatic.com/D_NQ_NP_883060-MLA44629014663_012021-O.webp"),
  new Product(58, "Lavandina Ayudín 1L", 120.00, 100, 8, "https://http2.mlstatic.com/D_NQ_NP_705563-MLA45701003558_042021-O.webp"),
  new Product(59, "Esponja Multiuso Scotch-Brite", 200.00, 50, 8, "https://http2.mlstatic.com/D_NQ_NP_633129-MLA45701029130_042021-O.webp"),
  new Product(60, "Jabón en Polvo Skip 800g", 450.00, 45, 8, "https://http2.mlstatic.com/D_NQ_NP_839734-MLA45743793742_042021-O.webp"),
  new Product(61, "Limpiador Cif Crema 500ml", 380.00, 60, 8, "https://http2.mlstatic.com/D_NQ_NP_729521-MLA46829264413_072021-O.webp"),
  // Categoría Hygiene and Personal Care (id: 9)
  new Product(62, "Shampoo Pantene 400ml", 750.00, 40, 9, "https://http2.mlstatic.com/D_NQ_NP_865490-MLA45754765095_042021-O.webp"),
  new Product(63, "Pasta Dental Colgate Triple Acción 90g", 150.00, 100, 9, "https://http2.mlstatic.com/D_NQ_NP_833001-MLA46642129090_072021-O.webp"),
  new Product(64, "Desodorante Rexona Aerosol 150ml", 350.00, 70, 9, "https://http2.mlstatic.com/D_NQ_NP_960962-MLA45756636669_042021-O.webp"),
  new Product(65, "Jabón de Tocador Dove 90g", 120.00, 90, 9, "https://http2.mlstatic.com/D_NQ_NP_860193-MLA31015062060_062019-O.webp"),
  new Product(66, "Papel Higiénico Elite 4 Rollos", 400.00, 75, 9, "https://http2.mlstatic.com/D_NQ_NP_904843-MLA45708909156_042021-O.webp")
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

  showCategories();
  showProducts(productCategories[6].id);

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
  let prod = products.find(product => product.id == id)

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

    // Create a br element for spacing

/* 
        
            <div class="img-cart">
              <img src="./assets/leche.png" alt="">
            </div>
          </li> */

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

    // Append the div to the li
    liElement.appendChild(divElement);
    liElement.appendChild(imgContainer);

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
      informacion = [];
    }
  });
}