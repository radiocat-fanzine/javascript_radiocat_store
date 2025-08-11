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
