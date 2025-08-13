# E-commerce Simulador - Radiocat Artshop

Este proyecto es un simulador básico de tienda de arte online desarrollado con JavaScript, HTML y CSS. Permite al usuario navegar por diversos tipos de productos como comics, ropa y accesorios, realizar búsquedas según nombre y tipo de producto, así como agregarlos en el carrito de comprar, modificar las cantidades, aplicar descuentos sobre productos especificos y realizar una compra simulada, eligiendo entre 3 métodos de pago, relleno de formulario con datos de compra y finalizando con una confirmación de pago.

# Estructura del E-commerce

## Archivos y Carpetas

- index.html — Página principal, donde se visualiza una galería los productos en cards con foto, nombre, precio, medidas o tallas y un boton para agregar al carrito

- /pages/
  - cart.html — Página del carrito de compras, aquí se puede borrar productos, agregar o quitar cantidades, visualizar descuentos en productos seleccionados (prints), elegir métodos de pago (tarjeta, PayPal, applePay)
  - confirm.html — Página de confirmación, te muestra el código de orden de compra, información sobre el envío y recibo de compra, además de un mensaje de agradecimiento y un botón que te devuelve al index.html (Artshop). Tiene su propio css: styleConfirm.css

- /css/
  - styles.css — Estilos principales del sitio: index.hmtl y cart.html
  - styleConfirm.css — Estilos específicos para la página de confirmación: confirm.html
  *Se estableció una paleta de colores definida: #403177 #A2FAA3 #F97068 #f9c4c1ff #FBF2F2, para mantener coherencia visual

- /js/
  - main.js — Funciones especificas del Artshop (index.html)
  - cart.js — Funciones específicas del carrito de compras (cart.html) y mensaje de confirmación (confirm.html)
  *Mas adelante profundizaremos en su contenido

- /db/
  - data.json — Data de productos que incluyen: id, nombre, precio, imagen de producto, tipo de producto, tamaño o talla, cantidad (1, para botones de agregar y quitar), siendo las principales por el momento, al ser data usada en las funciones. El resto de data fue ingresada para ser usada en futuras iteraciones del sitio.

- /assets/
  - /img/ — Imágenes de branding, logos, gif
  - /img_gallery/ — Imágenes de los prints
  - /img_shop/ — Imágenes de las demás categorias de productos para la tienda (fanzines, apparel, collection)

# Sobre el uso de JavaScript

## main.js
Maneja la estructura principal del `index.html`, vinculado con el método : `document.getElementById()`
- Arrays para alojar data de todos los productos `(products)` y de productos agregados al carrito de compra `(cart)`
- Contador de productos en el Nav Bar: `countingCart()` obtiene las cantidades de: `localStorage.getItem(cart)`
- Fetch con funcion asíncrona para obtener data de productos del `data.json`: `async function getProducts()`
- Función para mostrar los productos en la tienda: `displayProducts()`
- ForEach para recorrer el array que aloja la data del JSON y darle estructura html al card de cada producto
- Botón + Evento para agregar productos al carrito : `addToCart` y guardar en LocalStorage: `localStorage.setItem`
- Search Bar para filtrar productos por nombre y tipo de producto con la funcion: `searchProduct()`


## cart.js
Gestiona toda la lógica del carrito de compras (`cart.html`), vinculado con el método : `document.getElementById()`
- Obtiene los productos añadidos al carrito de compras de: `localStorage.getItem()`
- Función para guardar en localStorage: `saveInLocal()` con `localStorage.setItem()` y ser usado en otras funciones.
- Muestra los productos añadidos al carrito con cantidades y precios: `displayCart()`
  *Incluye botón para eliminar producto del carrito usando el método: `.splice`
  *Incluye botones para agregar o restar cantidades de productos del carrito usando el método: `.querySelector` y operaciones, se guarda en localStorage.
- Calcula el total a pagar según precio y cantidad con el método: `.reduce` y aplica descuentos específicos `(If)`, sobre el total según el tipo de producto y cantidad de producto usando:`applyDiscount()`
- Botón + Evento para visualizar los métodos de pago: `payButton.addEventListener` y función: `displayPayOptions()`;
- Ciclo `(For)` para recorrer array con datos de métodos de pago y dar estructura a las cards de cada opción y despliega un formulario flotante.
- En simultáneo, implementa notificaciones al seleccionar un métodos de pago usando `Toastify`.
- Aplica manejo de errores usando `try-catch-finally` para el proceso de pago simulado, verificando que todos los datos del formulario esten llenos. Sino manda un mensaje de error. Función + Promesa: `processPayment()`
- Función que muestra un formulario de pago simulado con datos prellenados: `showPayForm()`
- Al finalizar el pago, limpia el carrito con: `localStorage.removeItem()` y redirige al usuario a una página de confirmación tras completar la compra con `setTimeout()`
- En `confirm.html` te da la opción de volver a `index.html` con la función: `function goToArtshop()`