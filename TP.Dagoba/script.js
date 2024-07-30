// Definición de modales y elementos importantes
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var errorTienda = document.getElementById('id03');
var pagoCompra = document.getElementById('id04');
var pagoConfirmado = document.getElementById('id05');
var ubicacionTienda = document.getElementById('ubiGoogle');
var contactoEnviado = document.getElementById('formContacto');
var userError = document.getElementById('errorUsuario');
var loginButton = document.getElementById('loginBtn');
var signupButton = document.getElementById('signupBtn');
var logoutButton = document.getElementById('logoutBtn');
var userButton = document.getElementById('userBtn');
var loginLink = document.getElementById('loginLink');
var tiendaLink = document.querySelector('ul li:nth-child(4) a');
var orderBtns = document.querySelectorAll('.productoTienda button[id="orderBtn"]');
var addPlantToKart = document.getElementById('addPlant');


//Modales display

// Define la función para mostrar el modal id04
function showModalid04() {
    document.getElementById('id04').style.display = 'block';
}
// Añadir la función al evento click de `pagoTienda` cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    var pagoTienda = document.querySelector('.pagoTienda');
    if (pagoTienda) {
        pagoTienda.addEventListener('click', showModalid04);
    }
});

// Define la función para ocultar el modal id04
function hideModalid04() {
    document.getElementById('id04').style.display = 'none';
}

// Define la función para mostrar el modal de ubicación
function showubiGoogle() {
    document.getElementById('ubiGoogle').style.display = 'block';
}

// Añadir la función al evento click del botón cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    var locationButton = document.querySelector('.cctWhite20BtnUbi');
    if (locationButton) {
        locationButton.addEventListener('click', showubiGoogle);
    }
});

// Define la función para ocultar el modal de ubicación
function hideubiGoogle() {
    document.getElementById('ubiGoogle').style.display = 'none';
}

// Define la función para ocultar el modal de errorTienda
function hideErrorTienda() {
    document.getElementById('id03').style.display = 'none';
}

// Define la función para ocultar el modal de addplant
function hideAddPlant() {
    document.getElementById('addPlant').style.display = 'none';
}

// Define la función para ocultar el modal de formulario contacto enviado
function hideFormContactoEnviado() {
    document.getElementById('formContacto').style.display = 'none';

    // Limpiar el formulario
    var form = document.querySelector('.modal-content-contacto');
    if (form) {
        form.reset(); // Resetea el formulario
    }
}

// Define la función para mostrar el modal de login
function showLogin() {
    document.getElementById('id01').style.display = 'block';
}

// Añadir la función al evento click del botón cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    var locationButton = document.querySelector('.loginBtn');
    if (locationButton) {
        locationButton.addEventListener('click', showLogin);
    }
});

// Define la función para ocultar el modal de login
function hideLogin() {
    document.getElementById('id01').style.display = 'none';
}

// Define la función para mostrar el modal de signup
function showSignUp() {
    document.getElementById('id02').style.display = 'block';
}

// Añadir la función al evento click del botón cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    var locationButton = document.querySelector('.signupBtn');
    if (locationButton) {
        locationButton.addEventListener('click', showSignUp);
    }
});

// Define la función para ocultar el modal de login
function hideSignUp() {
    document.getElementById('id02').style.display = 'none';
}

// Define la función para mostrar el modal de error usuario
function showUserError() {
    document.getElementById('errorUsuario').style.display = 'block';
}

// Añadir la función al evento click del botón cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    var locationButton = document.querySelector('.signupBtn');
    if (locationButton) {
        locationButton.addEventListener('click', showUserError);
    }
});

// Define la función para ocultar el modal de error usuario
function hideUserError() {
    document.getElementById('errorUsuario').style.display = 'none';
}

// Variables para referencias importantes
var cantidadCarritoSpans = document.querySelectorAll('.cantidadCarrito');
var productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || []; // Array para almacenar los productos agregados al carrito

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
    actualizarContadorCarrito(); // Actualizar contador después de guardar
    actualizarVisibilidadPagoTienda(); // Actualizar visibilidad del botón de pago
}

// Función para inicializar el contador de productos desde localStorage
function inicializarContadorDesdeLocalStorage() {
    productosCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || [];
    actualizarContadorCarrito(); // Actualizar el contador al cargar desde localStorage
    actualizarVisibilidadPagoTienda(); // Actualizar visibilidad del botón de pago
}

// Función para actualizar el contador de productos en el carrito
function actualizarContadorCarrito() {
    var cantidadProductos = productosCarrito.reduce((total, producto) => total + producto.cantidad, 0);
    cantidadCarritoSpans.forEach(span => {
        span.textContent = cantidadProductos;
    });
}

// Función para actualizar la visibilidad del botón de pago
function actualizarVisibilidadPagoTienda() {
    // Obtener el div de pagoTienda
    var pagoTienda = document.querySelector('.pagoTienda');
    if (productosCarrito.length > 0) {
        pagoTienda.style.display = 'flex'; // Mostrar
    } else {
        pagoTienda.style.display = 'none';  // Ocultar
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    var productoEnCarrito = productosCarrito.find(item =>
        item.nombre === producto.nombre &&
        item.precio === producto.precio &&
        item.imagen === producto.imagen
    );

    if (productoEnCarrito) {
        // Incrementar la cantidad del producto existente
        productoEnCarrito.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        producto.cantidad = 1;
        productosCarrito.push(producto);
    }

    guardarCarritoEnLocalStorage(); // Guardar cambios en localStorage
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
    var index = productosCarrito.findIndex(item =>
        item.nombre === producto.nombre &&
        item.precio === producto.precio &&
        item.imagen === producto.imagen
    );

    if (index !== -1) {
        productosCarrito.splice(index, 1);
        guardarCarritoEnLocalStorage(); // Guardar cambios en localStorage
        actualizarCarrito(); // Actualizar la visualización del carrito
    }
}

// Función para sumar un producto al carrito
function sumarAlCarrito(producto) {
    var productoEnCarrito = productosCarrito.find(item =>
        item.nombre === producto.nombre &&
        item.precio === producto.precio &&
        item.imagen === producto.imagen
    );

    if (productoEnCarrito) {
        // Incrementar la cantidad del producto existente
        productoEnCarrito.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        producto.cantidad = 1;
        productosCarrito.push(producto);
    }

    guardarCarritoEnLocalStorage(); // Guardar cambios en localStorage
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// Función para restar un producto del carrito
function restarDelCarrito(producto) {
    var index = productosCarrito.findIndex(item =>
        item.nombre === producto.nombre &&
        item.precio === producto.precio &&
        item.imagen === producto.imagen
    );

    if (index !== -1) {
        // Reducir la cantidad del producto
        productosCarrito[index].cantidad--;

        // Si la cantidad llega a cero, eliminar el producto del carrito
        if (productosCarrito[index].cantidad === 0) {
            productosCarrito.splice(index, 1);
        }

        guardarCarritoEnLocalStorage(); // Guardar cambios en localStorage
        actualizarCarrito(); // Actualizar la visualización del carrito
    }
}

// Función para cargar y mostrar el carrito en la página
function cargarCarrito() {
    actualizarCarrito();
    actualizarContadorCarrito();
    actualizarVisibilidadPagoTienda(); // Asegurarse de que el botón de pago se muestre u oculte
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    var listaProductosCarrito = document.querySelector('.productosCarrito');
    listaProductosCarrito.innerHTML = ''; // Limpiar la lista antes de actualizar

    var total = 0;

    productosCarrito.forEach(function (producto) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        var nombre = document.createElement('div');
        var precio = document.createElement('div');
        var cantidad = document.createElement('div'); // Nuevo elemento para cantidad
        var botonRestar = document.createElement('button'); // Nuevo botón restar
        var cantidadSpan = document.createElement('span'); // Nuevo span para mostrar cantidad
        var botonSumar = document.createElement('button'); // Nuevo botón sumar
        var botonEliminar = document.createElement('button');

        img.src = producto.imagen;
        img.alt = producto.nombre;
        /*img.width = 100;*/
        li.appendChild(img);

        nombre.textContent = producto.nombre;
        li.appendChild(nombre);

        precio.textContent = '$' + (producto.precio * producto.cantidad).toFixed(2); // Multiplicar por la cantidad
        li.appendChild(precio);

        // Configuración de botón restar
        botonRestar.textContent = '-';
        botonRestar.addEventListener('click', function () {
            restarDelCarrito(producto); // Llama a la función para restar del carrito
        });
        li.appendChild(botonRestar);

        // Configuración de cantidad
        cantidadSpan.textContent = producto.cantidad; // Muestra la cantidad actual
        cantidad.appendChild(cantidadSpan);
        li.appendChild(cantidad);

        // Configuración de botón sumar
        botonSumar.textContent = '+';
        botonSumar.addEventListener('click', function () {
            sumarAlCarrito(producto); // Llama a la función para sumar al carrito
        });
        li.appendChild(botonSumar);

        /*botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function() {
            eliminarDelCarrito(producto); // Eliminar producto del carrito
        });
        li.appendChild(botonEliminar);*/

        listaProductosCarrito.appendChild(li);

        total += producto.precio * producto.cantidad; // Multiplicar por la cantidad
    });

    var totalElemento = document.querySelector('.total');
    totalElemento.textContent = '$' + total.toFixed(2);
}

// Evento de clic para los botones "Agregar al carrito"
orderBtns.forEach(function (boton) {
    boton.addEventListener('click', function () {
        var isLoggedIn = !!localStorage.getItem('username');

        if (isLoggedIn) {
            var producto = {
                nombre: boton.parentNode.querySelector('h1').textContent,
                precio: parseFloat(boton.parentNode.querySelector('.precioProducto').textContent.replace('$', '')),
                imagen: boton.parentNode.querySelector('img').src
            };

            agregarAlCarrito(producto); // Agregar producto al carrito
            /*document.querySelector('.contenidoCarrito').style.display = 'block';*/
            document.querySelector('.AddPlantKart').style.display = 'block';

        } else {
            errorTienda.style.display = 'block'; // Mostrar modal de error de tienda
        }
    });
});

// Evento de clic para mostrar el contenido del carrito
var enlacesCarrito = document.querySelectorAll('.kart-black, .kart-default');
enlacesCarrito.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        var carrito = document.querySelector('.contenidoCarrito');
        var isCarritoVisible = carrito.style.display === 'block';
        
        if (isCarritoVisible) {
            carrito.style.display = 'none'; // Cerrar el carrito si ya está abierto
        } else {
            carrito.style.display = 'block'; // Abrir el carrito si está cerrado
            cargarCarrito(); // Cargar el carrito al abrirlo
        }
    });
});

// Evento de clic para cerrar el carrito
var botonCerrarCarrito = document.querySelector('.cerrarCarrito');
if (botonCerrarCarrito) {
    botonCerrarCarrito.addEventListener('click', function () {
        document.querySelector('.contenidoCarrito').style.display = 'none';
    });
}

// Funcion de pago exitoso al checkout
function pagoExitoso() {
    var formulario = document.querySelector('.modal-content-pago'); // Obtiene el formulario
    if (formulario.checkValidity()) { // Valida el formulario
        // Si el formulario es válido, muestra el mensaje de pago exitoso
        document.getElementById('id05').style.display = 'block';
        document.getElementById('id04').style.display = 'none';
    } else {
        // Si el formulario no es válido, muestra un mensaje de error o realiza otra acción
        formulario.reportValidity(); // Muestra mensajes de error para los campos inválidos
    }
}

// Funcion de contacto exitoso
function contactoExitoso() {
    var formulario = document.querySelector('.modal-content-contacto'); // Obtiene el formulario
    if (formulario.checkValidity()) { // Valida el formulario
        // Si el formulario es válido, muestra el mensaje de pago exitoso
        document.getElementById('formContacto').style.display = 'block';
    } else {
        // Si el formulario no es válido, muestra un mensaje de error o realiza otra acción
        formulario.reportValidity(); // Muestra mensajes de error para los campos inválidos
    }
}

//Función fin de compra
function finDeCompra() {
    // Limpiar el carrito en localStorage
    localStorage.removeItem('productosCarrito');

    // Vaciar el array de productosCarrito
    productosCarrito = [];

    // Actualizar la visualización del carrito
    actualizarCarrito();

    // Restablecer el contador de productos del carrito a cero
    actualizarContadorCarrito();

    // Ocultar el modal de confirmación de pago
    document.getElementById('id05').style.display = 'none';

    //Redirigir al home
    window.location.href = 'index.html';
}

// Función para redirigir al usuario a la página de inicio de sesión
function redirectToLogin() {
    window.location.href = 'login.html'
}

// Función para redirigir al usuario a la tienda
function redirectToShop() {
    window.location.href = 'tienda.html'
}

// Función para redirigir al usuario su perfil
function redirectToProfile() {
    window.location.href = 'login.html#miUsuario'
}

// Actualización inicial del contador del carrito al cargar la página
inicializarContadorDesdeLocalStorage();

// Función para cerrar modales al hacer clic fuera de ellos
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == errorTienda) {
        errorTienda.style.display = "none";
    }
    if (event.target == pagoCompra) {
        pagoCompra.style.display = "none";
    }
    if (event.target == ubicacionTienda) {
        ubicacionTienda.style.display = "none";
    }
    if (event.target == contactoEnviado) {
        contactoEnviado.style.display = "none";
    }
    if (event.target == userError) {
        userError.style.display = 'none';
    }
    if (event.target == addPlantToKart) {
        addPlantToKart.style.display ='none';
    }
}

// Función para controlar el menú desplegable
function toggleMenu(event) {
    if (event) {
        event.preventDefault();
    }
    var menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('active');
        document.querySelector('.contenidoCarrito').style.display = 'none';
    }
}

// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById('uname').value;
    var username = userEmail.split('@')[0];

    localStorage.setItem('username', username);

    modal1.style.display = 'none'; // Cerrar el modal de inicio de sesión

    updateUI();
}

// Función para manejar el registro de usuario
function signup(event) {
    event.preventDefault();

    var userEmail = document.getElementById('newuname').value;
    var username = userEmail.split('@')[0];

    localStorage.setItem('username', username);

    modal2.style.display = 'none'; // Cerrar el modal de registro

    updateUI();
}

// Función para manejar el cierre de sesión
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('productosCarrito'); // Limpiar el carrito del localStorage
    productosCarrito = []; // Limpiar el array local de productos
    updateUI();
}

// Función para actualizar la interfaz de usuario
function updateUI() {
    var username = localStorage.getItem('username');
    var kartDefault = document.querySelector('.kart-default');
    var kartBlack = document.querySelector('.kart-black');
    var loginLink = document.getElementById('loginLink');
    var isLoggedIn = !!localStorage.getItem('username');
    var screenWidth = window.innerWidth;
    var loginLinkFooter = document.getElementById('footerLoginLink');
    var loginButton = document.getElementById('loginBtn'); // Botón de inicio de sesión
    var signupButton = document.getElementById('signupBtn'); // Botón de registro
    var logoutButton = document.getElementById('logoutBtn'); // Botón de cierre de sesión
    var userButton = document.getElementById('userBtn'); // Botón de perfil usuario
    var userProfile = document.getElementById('miUsuario'); // Sección usuario
    var footer = document.querySelector('footer');

    // Verificar si la página actual es login.html
    var isLoginPage = window.location.pathname.includes('login.html');

    if (isLoginPage) {
        // Ocultar el footer en la página de login
        if (footer) {
            footer.style.display = 'none';
        }
    } else {
        // Mostrar el footer en otras páginas
        var footer = document.querySelector('footer');
        if (footer) {
            footer.style.display = 'block';
        }
    }

    if (loginLink) {
        loginLink.textContent = isLoggedIn ? username : 'Iniciar sesión';
    }

    if (loginLinkFooter) {
        loginLinkFooter.textContent = isLoggedIn ? 'Usuario: ' + username : 'Iniciar sesión';
    }

    if (loginButton && signupButton && logoutButton && userButton) {
        loginButton.style.display = isLoggedIn ? 'none' : 'inline-block';
        signupButton.style.display = isLoggedIn ? 'none' : 'inline-block';
        logoutButton.style.display = isLoggedIn ? 'inline-block' : 'none';
        userButton.style.display = isLoggedIn ? 'inline-block' : 'none';
        userProfile.style.display = isLoggedIn ? 'block' : 'none';
    } else {
        console.error('No se encontraron los elementos de botón: loginBtn, signupBtn y/o logoutBtn.');
    }

    if (loginButton && signupButton && logoutButton && userButton && isLoginPage) {
        footer.style.display = isLoggedIn ? 'block' : 'none';
    }

    if (kartBlack && kartDefault) {
        if (isLoggedIn) {
            if (screenWidth <= 1035) {
                kartBlack.style.display = 'inline-block';
                kartDefault.style.display = 'none';
            } else {
                kartBlack.style.display = 'none';
                kartDefault.style.display = 'inline-block';
            }
        } else {
            kartBlack.style.display = 'none';
            kartDefault.style.display = 'none';
        }
    } else {
        console.error('No se encontraron los elementos con ID kart-black y/o kart-default.');
    }
}

// Llamada inicial para actualizar la interfaz si ya hay un usuario logueado
updateUI();

// Vincular evento de redimensionamiento de ventana para actualizar la interfaz
window.addEventListener('resize', function () {
    updateUI();
});

// Vincular evento de clic para toggleMenuBtn
var toggleMenuBtn = document.getElementById('toggleMenuBtn');
if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener('click', toggleMenu);
} else {
    console.error('No se encontró el elemento con ID toggleMenuBtn.');
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activar", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activar";
}

// Get the button
let mybutton = document.getElementById("myBtnUp");
console.log('Botón:', mybutton);

/* When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}*/

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
