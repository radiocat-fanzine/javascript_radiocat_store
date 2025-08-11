const shopContent = document.getElementById("shopContent");
const searchBar = document.getElementById("searchBar");
const noResults = document.getElementById("noResults")

//Fetch y Funcion para mostrar productos de la tienda con if y else

let products = [];

async function getProducts () {
    const response = await fetch("./db/data.json");
    const data = await response.json();
    products = data;
    console.log(data)
    displayProducts(data)
    }

function displayProducts(productList) {
    shopContent.innerHTML = "";

    if (productList.length === 0) {
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";

    productList.forEach((product) => {
        const content = document.createElement("div");
        content.className = "cardProduct";
        content.innerHTML = `
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <p class="size">${product.size}</p>
            <h3 class="price">€${product.price}</h3>
            <button>Add to Cart</button>
        `;
        shopContent.append(content);
    });
};

// Funcion de buscador de productos filtrando por nombre + evento

function searchProduct() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)||
        product.type.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts)
};

searchBar.addEventListener("input", searchProduct); // Evento

getProducts();


