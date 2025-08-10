const shopContent = document.getElementById("shopContent");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults")

//Fetch y Funcion para mostrar productos de la tienda

function getProducts () {
    fetch("./db/data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            displayProducts(data)
        })
}

function displayProducts (productList) {
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
        shopContent.appendChild(content);
        });
}

getProducts()




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

    descuentoPrints ("*Demon lover* Print", 15)


    //Funcion mostrar y sumar carrito de compras

    const cart = [];

    function totalCart(cart){
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
        }
        return total;
    }

    function itemCart(item){
        console.log(`${item.name} Price: €${item.price}`);
    }

    console.log("Shopping Cart \n Your Purchase:")

    itemCart(f03);
    itemCart(sp01);
    itemCart(ap04);
    itemCart(ms03)
    
    const finalPrice = totalCart(cart);
    alert(`Final price: €${finalPrice}
        Checkout`)

    let Checkout = parseInt(prompt("Choose a paying method \n 1-Debit / Credit Card \n 2-Apple Pay \n 3-PayPal \n 4-Return"))
while(menu !== 4) {
    switch(menu){
        case 1:
            //Nro. de Tarjeta: 123456
            let debitCreditCard = prompt("Add your Card Number");
            if (debitCreditCard === "123456") {
                alert("Card number accepted!");
            } 
            else {
                alert("Not a valid number")
            }
            // 123
            let securityCode = prompt("Add Security Code"); 
            if (securityCode === "123") {
                alert("Payment approved! \n Your purchase will arrive in 3 days!");
            } 
            else {
                alert("Payment failed :(")
            }
            break

        case 2:
            alert("Processing payment with Apple Pay ...");
            alert("Payment approved! \n Your purchase will arrive in 3 days!")
            
            break
        case 3:
            alert("Processing payment with PayPal ...");
            alert("Payment approved! \n Your purchase will arrive in 3 days!")
            
            break
            
        default:
            alert("Wrong option")
    }
    menu = parseInt(prompt("Choose a paying method \n 1-Debit / Credit Card \n 2-Apple Pay \n 3-PayPal \n 4-Return"))
    
}
