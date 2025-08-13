const cartContent = document.getElementById("cartContent");
const payContainer = document.getElementById("payContainer")
const formContainer = document.getElementById("formContainer");

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
            <h2>Price</h2>
            <h2>Unit</h2>
            <h2>Total</h2>
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
        discountCard.innerHTML = `<p> ☆*: .｡. 20% discount on Prints .｡.:*☆ = -€${discount.toFixed(2)}</p>`; //Metodo .toFixed para que el descuento total quede expresado con dos decimales
        footer.appendChild(discountCard);
    }
    let totalCard = document.createElement("div");
    totalCard.className = "total-info";
    totalCard.innerHTML = `<h2>Your total is = €${(total - discount).toFixed(2)}</h2>`;  //Metodo .toFixed para que el total final quede expresado con dos decimales

    let payButton = document.createElement("button");
    payButton.className = "btn-pay";
    payButton.textContent = "Pay Now";

    payButton.addEventListener("click", () => {
    displayPayOptions(cartContent);     
    });

    totalCard.appendChild(payButton);
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

//Funcion 4 para mostrar las opciones de pago

function displayPayOptions(){

    if (document.querySelector(".pay-options")) {
        return;
    }

    const options = [               //Array de Metodos de pago
        {id: "card", name: "💳 Card"},
        {id: "card", name: "🔷 PayPal"},
        {id: "card", name: "🤍 ApplePay"},
    ];
    
    const container = document.createElement("div");
    container.className = "pay-options";
    container.innerHTML = `
        <div class="pay-header">
            <h2>Select Payment Method</h2>
            <button class="close-pay">✖</button>
        </div>
        `;
    payContainer.appendChild(container)

    for (let i = 0; i < options.length; i++) {   //Ciclo (For) para crear los botones de cada metodo de pago
        const op = options[i];
        const button = document.createElement("button")
        button.className = "pay-card";
        button.innerText = op.name;

        button.addEventListener("click", function () {   //Evento: envio de notificaciones con Toastify
            Toastify({
                text: "You picked :" + op.name,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#f9c4c1ff",
                    color: "#403177"
                }
            }) .showToast();

            showPayForm(op);
        });
        container.appendChild(button);
    }
    container.querySelector(".close-pay").addEventListener("click", () =>{
        container.remove();
    });
    payContainer.appendChild(container);
};

//Funcion 5 para simular el proceso de pago y verificar que los datos son correctos + Promesa

function processPayment(form) {
    return new Promise((resolve, reject) => {
        const fullName = form.querySelector('input[name = "fullName"]').value;
        const id = form.querySelector('input[name = "id"]').value;
        const email = form.querySelector('input[name = "email"]').value;
        const address = form.querySelector('input[name = "address"]').value;

        if(!fullName || !id || !address){
            reject(new Error("Please complete all fields."));
        } else {
            setTimeout(() => {
                resolve("Payment successful! We’re processing your order now.");
            }, 2000);
        }
    });
}

//Funcion 6 para desplegar ventana flotante del formulario de pago con datos simulados de usuario

function showPayForm(payOption) {
    if(document.querySelector(".pay-form"))
        return;

    const form = document.createElement("div");
    form.className = "pay-form";

    const simulatedData = {
        fullName: "Marian Lopez",
        id: "123456789",
        email: "marian.lopez@example.com",
        address: "Av. Los Rosales 420",
    };

    form.innerHTML = `
        <div class = "form-content">
            <div class = "form-header">
                <h2>${payOption.name} Payment</h2>
                <button class = "form-close">✖</button>
            </div>
            <p><strong>Almost done!</strong><br>Please complete your details to finalize the payment.</p>
            <form id = "paymentForm">
                <label>Full Name:
                    <input type = "text" name = "fullName" value = "${simulatedData.fullName}" required>
                </label>
                <label>ID:
                    <input type = "text" name = "id" value = "${simulatedData.id}" required>
                </label>
                <label>E-mail:
                    <input type = "text" name = "email" value = "${simulatedData.email}" required>
                </label>
                <label>Shipping Address:
                    <input type = "text" name = "address" value = "${simulatedData.address}" required>
                </label>
                <button type = "button" class = "pay-submit">Complete Purchase</button>
            </form>
            <p class = "payment-message"></p>
        </div>
    `;
    
    formContainer.appendChild(form);

    form.querySelector(".form-close").addEventListener("click", () => {
        form.remove();
    });

    form.querySelector(".pay-submit").addEventListener("click", () => {
        const messageElement = form.querySelector(".payment-message");
        
        processPayment (form)
            .then((successMessage) => {
                messageElement.textContent = successMessage;

                cart = [];     
                localStorage.removeItem("cart");
                displayCart(cart);

                setTimeout(() => {window.location.href = "../pages/confirm.html";
                }, 2000);
            })

            .catch((error) => {
                messageElement.style.color = "#fe0d00ff";
                messageElement.textContent = "Error: " + error.message;
            })

            .finally(() =>{
                console/log("Payment attempt finished");
            });
    });
    
}

displayCart(cart);

//Funcion para boton que te redirige a index.html desde confirm.html

function goToArtshop() {
    window.location.href = '/index.html';
}
