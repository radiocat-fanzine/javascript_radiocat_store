const cartContent = document.getElementById("cartContent");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Funcion para guardar en el localstorage

const saveInLocal = () =>{
    localStorage.setItem("cart", JSON.stringify(cart));
};

//Funcion para visualizar el items y total del carrito de compra, borrar productos y agregar cantidades

//Funcion con paramentros 2 + evento
function displayCart(shopList) {

    cartContent.innerHTML = "";

    let header = document.createElement("div");
    header.className = "cardHeader"
    header.innerHTML = `
    <div class="left-info-header">
            <h2>Your Purchase :</h2>
        </div>
        <div class="center-info-header">
            <h2>Price :</h2>
            <h2>Unit :</h2>
            <h2>Total :</h2>
        </div>
        `;
    cartContent.appendChild(header);

    if (shopList.length === 0) {
        let emptyCart = document.createElement("p");
        emptyCart.className = "no-results-cart";
        emptyCart.innerText = "Your cart is empty.";
        cartContent.appendChild(emptyCart)
        return;
    }

    shopList.forEach((cartProduct, index) => {  //Metodo .forEach para mostrar items del carrito + botones para sumar y restar cantidades
        let content = document.createElement("div");
        content.className = "cardItem";
        content.innerHTML = `
        <div class="left-info">
            <img src="${cartProduct.img}" alt="${cartProduct.name}">
            <h3>${cartProduct.name}</h3>
        </div>
        <div class="center-info">                  
            <p class="price">€${cartProduct.price}</p>
            <div class="unit-buttons">            
            <button class="counter-subtract">-</button>  
            <p class="unit">${cartProduct.units}</p>
            <button class="counter-add">+</button>
            </div>
            <h3 class="total">€${cartProduct.price*cartProduct.units}</h3>
        </div>
        `;
        
        cartContent.append(content);

        let subtract = content.querySelector(".counter-subtract"); //Metodo .querySelector para identificar el boton para restar

        subtract.addEventListener("click",() => {
            if (cartProduct.units !== 1) {
                cartProduct.units--;
            }
            saveInLocal(cart);
            displayCart(cart);
        });

        let add = content.querySelector(".counter-add"); //Metodo .querySelector para identificar el boton para sumar

        add.addEventListener("click",() => {
            cartProduct.units++;
            saveInLocal(cart);
            displayCart(cart);
        });

        let deleteProduct = document.createElement("button");
        deleteProduct.innerText = "🗑";
        deleteProduct.className = "deleteProduct";
        content.append(deleteProduct);
        
        deleteProduct.addEventListener("click", () => { //Evento: Borrar Item del carrito, Metodo .splice
            cart.splice(index, 1);
            saveInLocal(cart);
            displayCart(cart);
        });
    });

    const total = cart.reduce((acc, item) => acc + item.price*item.units, 0); //Metodo .reduce para sumar los precios y cantidades del carrito
    const discount = applyDiscount(cart);

    let footer = document.createElement("div");
    footer.className = "cardFooter";

    if (discount > 0) {
        let discountCard = document.createElement("div");
        discountCard.className = "discount-info";
        discountCard.innerHTML = `<p> 20% discount on Prints: -€${discount.toFixed(2)}</p>`; //Metodo .toFixed para que el descuento total quede expresado con dos decimales
        footer.appendChild(discountCard);
    }
    let totalCard = document.createElement("div");
    totalCard.className = "total-info";
    totalCard.innerHTML = `<h2>Your total is : €${(total - discount).toFixed(2)}</h2>`;  //Metodo .toFixed para que el total final quede expresado con dos decimales

    footer.appendChild(totalCard);
    cartContent.appendChild(footer);
};

//Funcion 3 para aplicar descuento 20% en prints

function applyDiscount(cart) {
    let totalDiscount = 0;
    cart.forEach(product => {
        if (product.type === "print" && product.units > 1) {
            const discPerUnit = product.price * 0.20;
            const unitsWithDisc = product.units;
            totalDiscount  += discPerUnit * unitsWithDisc;
        }
    });
    return totalDiscount;
};

displayCart(cart);
