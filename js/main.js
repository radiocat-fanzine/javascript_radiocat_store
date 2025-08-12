const shopContent = document.getElementById("shopContent");
const searchBar = document.getElementById("searchBar");
const noResults = document.getElementById("noResults");
const cartCounter = document.getElementById("cartCounter")


//Funciones para obtener los productos desde JSON y mostrarlos en la tienda

let products = []; // Array para colocar los objetos de JSON

//Funcion asincrona de orden superior 1 para obtener los productos
async function getProducts () {       
    const response = await fetch("./db/data.json"); // Fetch / JSON
    const data = await response.json();
    products = data;
    displayProducts(data)
    }

let cart = []; // Array para colocar los productos comprados

//Funcion 1 para contador de productos en nav bar

function countingCart() {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (countCart) {
        if (currentCart.length === 0) {
        countCart.style.display = "none";
        } else {
            countCart.style.display = "block";
            const totalUnits = currentCart.reduce((acc, item) => acc + (item.units || 1), 0);
            countCart.innerText = totalUnits;
        };
    };
};

countingCart();


//Funcion 2 + evento para mostrar productos
function displayProducts(productList) {
    shopContent.innerHTML = "";

    if (productList.length === 0) {   // If
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";

    productList.forEach((product) => {  // For each para recorrer el Array
        let content = document.createElement("div");
        content.className = "cardProduct";
        content.innerHTML = `
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <p class="size">${product.size}</p>
            <h3 class="price">€${product.price}</h3>
        `;
        shopContent.append(content);

        let addToCart = document.createElement("button");
        addToCart.innerText = "Add to cart";
        addToCart.className = "addCart";
        
        content.append(addToCart);
        
        addToCart.addEventListener("click", () => {   // Evento: Agregar al Carrito y Contar unidades / Metodos .some y .push
                        
            let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

            const count = currentCart.some((countUnit) => countUnit.id === product.id);

            if(count){
                currentCart.map((item) => {
                    if(item.id === product.id) {
                        item.units++;
                    }
                });
            } else {
                currentCart.push({
                    id: product.id,
                    img: product.img,
                    name: product.name,
                    price: product.price,
                    units: product.units,
                    type: product.type,
                });
            }

            localStorage.setItem("cart", JSON.stringify(currentCart));
            
            console.log(currentCart);
            countingCart();
        });
    });
};

// Funcion de buscador de productos filtrando por nombre y tipo

//Funcion de orden superior 2 + evento

function searchProduct() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)||
        product.type.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts)
};

if (searchBar) {
    searchBar.addEventListener("input", searchProduct); // Evento
}

getProducts();


