//Lista de productos//

//Fanzines//

const products = [
    {
    id: "f01",
    name: "El Baile de la Venganza",
    year: "2023",
    price: 8,
    size: "14 x 10 cm / 20 pp",
    printing: "Digital printing",
    feature: "Spanish",
    description: "A fanzine with poems and drawings by Radiocat and Feminist Poet from Trujillo, Peru, Diana Terrones. The poems deal with feelings between visceral and melancholic that meet the reader's own wounds. All illustrations were worked with ink.",
    img: "assets/img_shop/f_elbaile_01.jpg",
    },
    {
    id: "f02",
    name: "Moonchild",
    year: "2022",
    price: 15,
    size: "14.5 x 20 cm / 44 pp",
    printing: "Digital printing",
    feature: "Spanish / English",
    description: "A comic featuring four short stories, each unfolding like pieces of a puzzle that interweave past and future—what has already happened and what is yet to come. Following the moon's trajectory, the reader is drawn into a distorted landscape where the only undeniable truth is emotion. The original cover illustrations were painted in watercolor, while the interior artwork was created with ink and digitally retouched.",
    img: "assets/img_shop/f_moonchild.jpg",
    },
    {
    id: "f03",
    name: "Genesis",
    year: "2021",
    price: 10,
    size: "14 x 10 cm / 28 pp",
    printing: "Cover: Screen printing / Interior: Digital printing",
    feature: "Spanish / English",
    description: "From the encounter between a star and a young girl, she embarks on a journey into an astral dimension shaped by her own solitude. As she navigates this new world, she contemplates the true meaning of forging bonds with other sentient beings. Inspired by Grimes' song, she slowly awakens her dormant heart, realizing that each connection has given rise to its own universe. The original illustrations were made with ink and acrylics.",
    img: "assets/img_shop/f_genesis_01.jpg",
    },
    {
    id: "f04",
    name: "En la Noche",
    year: "2021",
    price: 10,
    size: "14 x 10 cm / 16 pp",
    printing: "Cover: Screen printing / Interior: Digital printing",
    feature: "Spanish / English",
    description: "A fanzine created as an outlet to release the tension and uncertainty about the future, brought on by the sociopolitical context—not only in Peru but worldwide. Drawing from elements of tarot, palmistry, and astrology, it explores emotions ranging from anguish, apathy, and a sense of defeat to the transformation of that chaotic energy into a driving force that keeps us moving forward. The sketches were hand-drawn and later digitally colored.",
    img: "assets/img_shop/f_enlanoche_01.jpg",
    },
    {
    id: "f05",
    name: "Insomnio (2021)",
    price: 8,
    size: "14 x 10 cm / 16 pp",
    printing: "Digital printing",
    feature: "Spanish / English",
    description: "A satirical fanzine about the artist's struggles with sleep, driven by an imagination that borders on delirium and an uncontrollable curiosity sparked by the slightest mental stimulus. It also delves into her unique way of coping with it all. The illustrations were created using ink and watercolors.",
    img: "assets/img_shop/f_insomnio_01.jpg",
    },
//Apparel//
    {
    id: "ap01",
    name: "New Moon TShirt",
    price: 20,
    size: "S / M / L / XL",
    feature: "100% Cotton / Tie dye pink Jersey / Black ink",
    printing: "Hand Screen Printed",
    description: "White jersey T-shirt with a soft pastel pink marbled tie-dye effect. It features a front pocket printed with a small flame drawing, while the back shows an illustration of a witch with the new moon in the background, all printed in black ink. The fabric is light and soft to the touch. More than just a garment, it is a talisman—the lunar energy guiding new paths, while the little flame keeps the heart warm and alight.",
    img: "assets/img_shop/camiseta_lunanueva_01.jpg",
    },
    {
    id: "ap02",
    name: "Kawaii Kitty TShirt",
    price: 20,
    size: "S / M / L / XL",
    feature: "100% Cotton / Black Jersey / White or Salmon ink",
    printing: "Hand Screen Printed",
    description: "Black jersey T-shirt with a front pocket, made from a light and soft fabric. The print is available in salmon or white. On the pocket, a cute kawaii kitten adds charm, the same one that, in the back design, grants its blessing to a girl as she dissolves into the cosmos. If you gaze directly into the kitten’s third eye, you too may receive its blessing.",
    img: "assets/img_shop/camiseta_michikawaii_blanco_01.jpg",
    },
    {
    id: "ap03",
    name: "Ritual TShirt",
    price: 20,
    size: "S / M / L",
    feature: "100% Cotton / Black Jersey / Lilac ink",
    printing: "Hand Screen Printed",
    description: "Black jersey T-shirt with a front-printed design, made from a light and soft fabric. The lilac ink print depicts a girl performing an energy cleansing ritual in a bathtub, as water lilies rise to the surface. Around her, the gentle rhythm of waves dissolving into the sand lulls her into a soothing trance.",
    img: "assets/img_shop/camiseta_ritual01.jpg",
    },
    {
    id: "ap05",
    name: "New Moon Sweatshirt",
    price: 30,
    size: "L",
    feature: "100% Cotton / Melange French Terry / Black ink",
    printing: "Hand Screen Printed",
    description: "Long-sleeve sweatshirt made from heather gray French terry, a lightweight and comfortable fabric, perfect for the early days of cold weather. The front features a black ink print of a witch with the new moon in the background, evoking a mystical and enigmatic aura.",
    img: "assets/img_shop/polera_lunanueva_01.jpg",
    },
//Misc Items//
    {
    id: "ms01",
    name: "Witchy Sticker Pack",
    price: 8,
    size: "4 to 10 cm / 12 stickers",
    printing: "Hand Screen Printed",
    feature: "Holographic Vinil & Black ink / Pastel pink, mint and lilac & Gold ink",
    description: "Various designs of kawaii kittens, magical items and flowers.",
    img: "assets/img_shop/stickers_colores_04.jpg",
    },
    {
    id: "ms02",
    name: "Witchy Notebook",
    price: 10,
    size: "14.5 x 20 cm / 60 pp",
    printing: "Cover: Screen Printed",
    feature: "Interior: 75gr ivory bond paper",
    description: "Staple-bound notebooks with covers made from 220 g fine cotton cardstock in Prussian blue. The design, screen-printed in gold ink, features a pattern inspired by magic, tarot, and rituals. It comes with a vibrant neon fuchsia elastic band to keep it securely closed.",
    img: "assets/img_shop/libretas_witch01.jpg",
    },
    {
    id: "ms03",
    name: "Ritual Totebag",
    price: 15,
    size: "33 x 37 cm",
    printing: "Hand Screen Printed",
    feature: "100% Cotton",
    description: "Totebag with a printed design on one side. It features two sturdy fabric handles securely stitched to the body. Made from tocuyo fabric, it showcases a delicate tie-dye effect in soft pastel shades of pink and blue. The printed design depicts an illustration of a girl performing an energy cleansing ritual in a bathtub, as water lilies rise to the surface. Around her, the gentle rhythm of waves dissolving into the sand lulls her into a soothing trance.",
    img: "assets/img_shop/totebag_ritual.jpg",
    },
    {
    id: "ms04",
    name: "Cosmic Kitty Mug",
    price: 15,
    size: "11 oz / 30 ml",
    printing: "Sublimation Printing on Ceramic",
    feature: "Ceramic mug",
    description: "Ceramic mug featuring a design of a cosmic kitten peacefully sleeping while drifting among galaxies. The original illustration was created using ink and watercolors, capturing a dreamy atmosphere.",
    img: "assets/img_shop/taza_gatocosmico_01.jpg",
    },
    {
    id: "ms05",
    name: "Mermaid Mug",
    price: 15,
    size: "11 oz / 30 ml",
    printing: "Sublimation Printing on Ceramic",
    feature: "Ceramic mug",
    description: "Ceramic mug featuring a design of a mermaid resting on a rock as she gazes at the sunset. The original illustration, created with ink and watercolors, captures a contemplative moment by the sea.",
    img: "assets/img_shop/taza_sirena_01.jpg",
    },
//Prints//
    //Fine Art Prints//
    {
    id: "fp01",
    name: "*Demon Lover* Fine Art Print",
    price: 12,
    size: "A5 format",
    feature: "120 gr. Acid-free cotton paper",
    printing: "High Quality Digital Printing",
    description: "The original illustration was made with watercolors.",
    img: "assets/img_gallery/a_06.jpg",
    },
    {
    id: "fp02",
    name: "*Eros in Pisces* Fine Art Print",
    price: 12,
    size: "A5 format",
    feature: "120 gr. Acid-free cotton paper",
    printing: "High Quality Digital Printing",
    description: "The original illustration was made with watercolors.",
    img: "assets/img_gallery/a_01.jpg",
    },
    {
    id: "fp03",
    name: "*Spring Rain* Fine Art Print",
    price: 12,
    size: "A5 format",
    feature: "120 gr. Acid-free cotton paper",
    printing: "High Quality Digital Printing",
    description: "The original illustration was made with watercolors.",
    img: "assets/img_gallery/a_04.jpg",
    },
    {
    id: "fp04",
    name: "*Munay Lagoon* Fine Art Print",
    price: 12,
    size: "A5 format",
    feature: "120 gr. Acid-free cotton paper",
    printing: "High Quality Digital Printing",
    description: "The original illustration was made with watercolors.",
    img: "assets/img_gallery/a_05.jpg",
    },
    //Holographic Prints//
    {
    id: "hp01",
    name: "*Pearl Goddess* Print",
    price: 15,
    size: "A4 format",
    feature: "Holographic Vinil",
    printing: "High Quality Digital Printing",
    description: "The original illustration was made with ink and was digitally colored.",
    img: "assets/img_shop/pearlgoddess_01.jpg",
    },
        //Screen Printed//
    {
    id: "sp01",
    name: "*Love & Shadow* Poster",
    price: 15,
    size: "A3 format",
    feature: "120 gr. Neon pink paper",
    printing: "Hand Screen Printed in black ink",
    description: "The original illustration was made with black ink. The scene belongs to the 4th chapter of the comic *Moonchild*",
    img: "assets/img_shop/poster_loveshadow_01.jpg",
    },
    ];


localStorage.setItem("storeFanzines",JSON.stringify(fanzines));
localStorage.setItem("storeApparel",JSON.stringify(apparel));
localStorage.setItem("storeMisc",JSON.stringify(misc));
localStorage.setItem("storePrints",JSON.stringify(prints));
fanzinesProducts = JSON.parse(localStorage.getItem("storeFanzines"));
apparelProducts = JSON.parse(localStorage.getItem("storeApparel"));
miscProducts = JSON.parse(localStorage.getItem("storeMisc"));
printsProducts = JSON.parse(localStorage.getItem("storePrints"));

const shopContent = document.getElementById("shopContent");
const searchInput = document.getElementById("searchInput");

const displayFanzines = () => {
    fanzines.forEach((product) => {
        const content = document.createElement("div");
        content.className = "cardProduct";
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name} (${product.year})</h3>
        <p class="format">${product.format}</p>
        <h3 class="price">€${product.price}</h3>
        <button>Add to Cart</button>
        `;
        shopContent.append(content);
    });
};

const displayApparel = () => {
    apparel.forEach((product) => {
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

const displayMisc = () => {
    misc.forEach((product) => {
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

const displayPrints = () => {
    prints.forEach((product) => {
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

const searchProduct = () => {
    const searchTerm = searchInput.value.toLowerCase()
    const filterProduct = products. filter((product) => product.name.toLowerCase())
};

displayFanzines();
displayApparel();
displayMisc();
displayPrints();


// Funciones //

//Funcion saludar

function saludar(){
    alert("Welcome to Radiocat Store!")
}

//Funcion buscar fanzine de la tienda, muestra el nombre del fanzine y su año de publicación//


    function searchTitle (name, year) {
        console.log(`Searching item: ${name}...`);
        console.log(`Fanzine found: *${name}* (${year})`)

}

searchTitle();

//Funcion buscar producto de la tienda, muestra el nombre del item y su precio//


    function searchItem (name, price) {
        console.log(`Searching item: ${name}...`);
        console.log(`Item found: ${name} Price: €${price}`)
        }

searchItem();


//Funcion de busqueda para menu

function searchNameInItem(sectionOfItems, nameSearch){
    const nameSearchLowerCase = nameSearch.toLowerCase();

    for (let i = 0; i < sectionOfItems.length; i++ ) {
        const item = sectionOfItems[i];
        for(let j = 0; j < item.length; j++){
            const itemFound = item.length [j].toLowerCase();
            if (itemFound === nameSearchLowerCase) {
                return true;
            }
        }
    }
    return false;
}


//Menu de busqueda

// function fanzineSearch ()

// let menu = parseInt(prompt("What are you looking for? \n 1-fanzines \n 2-apparel \n 3-prints \n 4-misc \n 5-close"))
// while(menu !== 5) {
//     switch(menu){
//         case 1:
//             const fanzineSearch = prompt("What fanzine are you looking for?");
//             if (fanzineSearch) {
//                 const itemFound = searchNameInItem(fanzines, fanzineSearch);
//                 if(itemFound) {
//                     console.log("Item found:", itemFound)
//                 }
//                 else {
//                     console.log ("Not in stock :(");
//                 }
//             }
//             else {
//             console.log("You forgot to add your search");
//             }
//             break
//         case 2:
//             const apparelSearch = prompt("What clothes are you looking for?");
//             if (apparelSearch) {
//                 const itemFound = searchNameInItem(apparel, apparelSearch);
//                 if(itemFound) {
//                     console.log("Item found:", itemFound)
//                 }
//                 else {
//                     console.log ("Not in stock :(");
//                 }
//             }
//             else {
//             console.log("You forgot to add your search");
//             }
//             break
//         case 3:
//             const printSearch = prompt("What kind of prints are you looking for? \n Fine Art? Holographic? or Screen Printed?");
//             if (printSearch) {
//                 const itemFound = searchNameInItem(prints, printSearch);
//                 if(itemFound) {
//                     console.log("Item found:", itemFound)
//                 }
//                 else {
//                     console.log ("Not in stock :(");
//                 }
//             }
//             else {
//             console.log("You forgot to add your search");
//             }
//             break
//         case 4:
//             const miscSearch = prompt("What are you looking for? \n Stickers? Totebags? Mugs? or Notebooks?");
//             if (miscSearch) {
//                 const itemFound = searchNameInItem(apparel, miscSearch);
//                 if(itemFound) {
//                     console.log("Item found:", itemFound)
//                 }
//                 else {
//                     console.log ("Not in stock :(");
//                 }
//             }
//             else {
//             console.log("You forgot to add your search");
//             }
//             break
//         default:
//             alert("Wrong option")
//     }
//     menu = parseInt(prompt("What are you looking for? \n 1-fanzines \n 2-apparel \n 3-prints \n 4-misc \n 5-close"))
    
// }



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
