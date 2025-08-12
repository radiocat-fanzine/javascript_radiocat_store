const cartContent = document.getElementById("cartContent");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

    shopList.forEach((cartProduct, index) => {  //Metodo .forEach para mostrar items del carrito
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
            <button class="counter">-</button>  
            <p class="unit">${cartProduct.units}</p>
            <button class="counter">+</button>
            </div>
            <h3 class="total">€${cartProduct.price*cartProduct.units}</h3>
        </div>
        `;
        
        cartContent.append(content);

        let deleteProduct = document.createElement("button");
        deleteProduct.innerText = "🗑";
        deleteProduct.className = "deleteProduct";
        content.append(deleteProduct);
        
        deleteProduct.addEventListener("click", () => { //Evento: Borrar Item del carrito, Metodo .splice
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart(cart);
        });
    });
    const total = cart.reduce((acc, item) => acc + item.price*item.units, 0); //Metodo .reduce para sumar los precios y cantidades del carrito
    
    let footer = document.createElement("div");
    footer.className = "cardFooter"
    footer.innerHTML = `<h2>Your total is : €${total}</h2>`;
    cartContent.appendChild(footer);
};

displayCart(cart);






//Funcion aplicar descuento 50% en prints//

    function descuentoPrints(name, price) {
        let numberOfItems = parseInt(prompt(`*${name}* Price: €${price} 
            We have a 20% discount if you purchase more than one print! :)
            Add n° items to cart: `))
        const descuento = ((price * numberOfItems) * 0.8)
        if (numberOfItems > 1) {
            alert("Now you have a 20% discount on your purchase :)");
            console.log(`Your purchase: *${name}* Final price: €${descuento}`);
        }

        else {
            console.log(`Your purchase: *${name}* Final price: €${price}`)
        }
    
    }

    //descuentoPrints ()
