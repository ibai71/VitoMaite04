/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function handleLogin() {
    // Obtener los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('contraseña').value;

    // Verificar si los campos están llenos
    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return; // Salir de la función si hay campos vacíos
    }

    // Aquí puedes agregar tu lógica para manejar el inicio de sesión
    // Por ejemplo, puedes redirigir a otra página o mostrar un mensaje
    alert(`Bienvenido, ${username}!`);
    // Redirigir a la página principal o de usuario (puedes personalizar esto)
    window.location.href = "indexLogeado.html";
}


function handleSearchClick() {
    // Redireccionar a la página que deseas (por ejemplo, resultados.html)
    
     const queBuscas = document.getElementById('queBuscas').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;

    // Verificar si todos los campos están completados
    if (queBuscas === "" || edad === "" || ciudad === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return; // Salir de la función si hay algún campo vacío
    }
    window.location.href = "busqueda-no-log.html";
}

