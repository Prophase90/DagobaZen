var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var loginButton = document.getElementById('loginBtn');
var signupButton = document.getElementById('signupBtn');
var logoutButton = document.getElementById('logoutBtn');
var loginLink = document.getElementById('loginLink');
var tiendaLink = document.querySelector('ul li:nth-child(4) a');

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function toggleMenu() {
    event.preventDefault();
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function login(event) {
    event.preventDefault();
    
    // Obtenemos el valor del campo de correo
    var userEmail = document.getElementById('uname').value;
    
    // Extraemos el nombre de usuario (antes del '@')
    var username = userEmail.split('@')[0];
    
    // Guardamos el nombre de usuario en localStorage
    localStorage.setItem('username', username);
    
    // Cerramos el modal
    document.getElementById('id01').style.display = 'none';
    
    // Actualizamos la interfaz si es necesario
    updateUI();

    // Redirigir a la página de la tienda
    window.location.href = 'tienda.html';

}

function signup(event) {

    event.preventDefault();
    
    // Obtenemos el valor del campo de correo
    var userEmail = document.getElementById('newuname').value;
    
    // Extraemos el nombre de usuario (antes del '@')
    var username = userEmail.split('@')[0];
    
    // Guardamos el nombre de usuario en localStorage
    localStorage.setItem('username', username);
    
    // Cerramos el modal
    document.getElementById('id02').style.display = 'none';
    
    // Actualizamos la interfaz si es necesario
    updateUI();

    // Redirigir a la página de la tienda
    window.location.href = 'tienda.html';


}

function logout() {
    localStorage.removeItem('username'); // Elimina el nombre de usuario del localStorage
    
    updateUI(); // Actualiza la interfaz después de cerrar sesión
}

function updateUI() {
    // Lógica para actualizar la interfaz después del login
    var username = localStorage.getItem('username');
    
    // Modificar el botón de inicio de sesión por el nombre del usuario
    var loginLink = document.getElementById('loginLink');
    if (loginLink) {
        if (username) {
            loginLink.textContent = username;
        } else {
            loginLink.textContent = 'Iniciar sesión';
        }
    }

    var loginLinkFooter = document.getElementById('footerLoginLink');
    if (loginLinkFooter) {
        if (username) {
            loginLinkFooter.textContent = 'Usuario: ' + username;
        } else {
            loginLinkFooter.textContent = 'Iniciar sesión';
        }
    }
    
    // Lógica para mostrar/ocultar botón de tienda en el menú
    var isLoggedIn = !!localStorage.getItem('username');
    var tiendaLinkMenu = document.querySelector('#menuNavegacion ul li:nth-child(4)');
    if (tiendaLinkMenu) {
        if (isLoggedIn) {
            tiendaLinkMenu.style.display = 'list-item';
        } else {
            tiendaLinkMenu.style.display = 'none';
        }
    }
    
    // Lógica para mostrar/ocultar botón de tienda en el footer
    var tiendaLinkFooter = document.querySelector('footer ul li:nth-child(4)');
    if (tiendaLinkFooter) {
        if (isLoggedIn) {
            tiendaLinkFooter.style.display = 'list-item';
        } else {
            tiendaLinkFooter.style.display = 'none';
        }
    }
    
    // Mostrar/ocultar botones de login y logout
    if (isLoggedIn) {
        loginButton.style.display = 'none';
        signupButton.style.display = 'none';
        logoutButton.style.display = 'inline-block'; // Mostrar el botón de cerrar sesión
    } else {
        loginButton.style.display = 'inline-block';
        signupButton.style.display = 'inline-block';
        logoutButton.style.display = 'none'; // Ocultar el botón de cerrar sesión
    }
}



// Llamada inicial para actualizar la interfaz si ya hay un usuario logueado
updateUI();
