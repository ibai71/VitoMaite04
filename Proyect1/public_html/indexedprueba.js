/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var cajadatos, bd;

function iniciar() {
    cajadatos = document.getElementById("VitoMaite04");

    // Abre o crea la base de datos "vitomaitexx"
    var solicitud = indexedDB.open("vitomaitexx", 1);

    solicitud.addEventListener("error", mostrarerror);
    solicitud.addEventListener("success", comenzar);
    solicitud.addEventListener("upgradeneeded", crearbd);
}

function mostrarerror(evento) {
    alert("Error: " + evento.target.errorCode + " " + evento.target.error.message);
}

function comenzar(evento) {
    bd = evento.target.result;
    
}

function crearbd(evento) {
    var basededatos = evento.target.result;

    // Crear la colección "usuario" con "email" como clave primaria
    var almacenUsuario = basededatos.createObjectStore("usuario", { keyPath: "email" });
    almacenUsuario.createIndex("buscarPorNombre", "nombre", { unique: false });
    almacenUsuario.createIndex("buscarPorEmail", "email", { unique: true });

    // Crear la colección "aficion"
    var almacenAficion = basededatos.createObjectStore("aficion", { keyPath: "idAficion" });
    almacenAficion.createIndex("buscarPorDescripcion", "descripcion", { unique: true });

    // Crear la colección "usuario_aficion"
    var almacenUsuarioAficion = basededatos.createObjectStore("usuario_aficion", { keyPath: "id" });
    almacenUsuarioAficion.createIndex("buscarPorUsuario", "idUsuario", { unique: false });
    almacenUsuarioAficion.createIndex("buscarPorAficion", "idAficion", { unique: false });

    // Crear la colección "meGusta"
    var almacenMeGusta = basededatos.createObjectStore("meGusta", { keyPath: "id" });
    almacenMeGusta.createIndex("buscarPorUsuario", "idUsuario", { unique: false });
    almacenMeGusta.createIndex("buscarPorIdMeGusta", "idUsuarioMeGusta", { unique: false });

    // Cargar datos iniciales en la misma transacción
    cargarDatosIniciales(evento.target.transaction);
}

function cargarDatosIniciales(transaccion) {
    // Añadir datos iniciales a "usuario"
    var almacenUsuario = transaccion.objectStore("usuario");
    almacenUsuario.add({ email: "juan@gmail.com", nombre: "juan",contraseña:"1234p",ciudad:"Vitoria",edad:"20", genero:"Hombre",foto:"",latitud: 42.8464,longitud: -2.6714});
    almacenUsuario.add({ email: "unax@gmail.com", nombre: "unax" ,contraseña:"1234p",ciudad:"Vitoria",edad:"34", genero:"Hombre",foto:"",latitud: 43.8464,longitud: -2.7714});
    almacenUsuario.add({ email: "ibai@gmail.com", nombre: "ibai",contraseña:"1234p",ciudad:"Bilbao",edad:"20", genero:"Hombre",foto:"" ,latitud: 42.5464,longitud: -2.6714});
    almacenUsuario.add({ email: "adrian@gmail.com", nombre: "adrian" ,contraseña:"1234p",ciudad:"Vitoria",edad:"30", genero:"Hombre",foto:"",latitud: 42.7464,longitud: -2.6714});
    almacenUsuario.add({ email: "marcos@gmail.com", nombre: "marcos",contraseña:"1234p",ciudad:"Vitoria" ,edad:"25", genero:"Hombre",foto:"",latitud: 42.6464,longitud: -2.6714});
    almacenUsuario.add({ email: "pablo@gmail.com", nombre: "pablo" ,contraseña:"1234p",ciudad:"Bilbao",edad:"22", genero:"Hombre",foto:"",latitud: 42.8464,longitud: -2.3714});
    almacenUsuario.add({ email: "luis@gmail.com", nombre: "luis",contraseña:"1234p" ,ciudad:"Donosti",edad:"22", genero:"Hombre",foto:"",latitud: 42.8464,longitud: -2.6714});
    almacenUsuario.add({ email: "pedro@gmail.com", nombre: "pedro" ,contraseña:"1234p",ciudad:"Donosti",edad:"20", genero:"Hombre",foto:"",latitud: 41.8464,longitud: -2.6714});
    almacenUsuario.add({ email: "ana@gmail.com", nombre: "ana" ,contraseña:"1234p",ciudad:"Vitoria",edad:"30", genero:"Mujer",foto:"",latitud: 42.9464,longitud: -2.6714});
    almacenUsuario.add({ email: "uxue@gmail.com", nombre: "uxue" ,contraseña:"1234p",ciudad:"Bilbao",edad:"30", genero:"Mujer",foto:"",latitud: 43.1464,longitud: -2.6714});
    almacenUsuario.add({ email: "ane@gmail.com", nombre: "ane" ,contraseña:"1234p",ciudad:"Vitoria",edad:"24", genero:"Mujer",foto:"",latitud: 42.8264,longitud: -2.6714});
    almacenUsuario.add({ email: "alazne@gmail.com", nombre: "alazne" ,contraseña:"1234p",ciudad:"Bilbao",edad:"26", genero:"Mujer",foto:"",latitud: 42.4484,longitud: -2.9714});
    almacenUsuario.add({ email: "june@gmail.com", nombre: "june" ,contraseña:"1234p",ciudad:"Bilbao",edad:"28", genero:"Mujer",foto:"",latitud: 42.8464,longitud: -2.5714});
    almacenUsuario.add({ email: "lucia@gmail.com", nombre: "lucia" ,contraseña:"1234p",ciudad:"Donosti",edad:"30", genero:"Mujer",foto:"",latitud: 42.3464,longitud: -2.3714});
    almacenUsuario.add({ email: "laura@gmail.com", nombre: "laura" ,contraseña:"1234p",ciudad:"Vitoria",edad:"20", genero:"Mujer",foto:"",latitud: 42.3864,longitud: -2.4714});

    // Añadir datos iniciales a "aficion"
    var almacenAficion = transaccion.objectStore("aficion");
    almacenAficion.add({ idAficion: 1, descripcion: "Fútbol" });
    almacenAficion.add({ idAficion: 2, descripcion: "Cine" });
    almacenAficion.add({ idAficion: 3, descripcion: "Caminar" });
    almacenAficion.add({ idAficion: 4, descripcion: "Padel" });
    almacenAficion.add({ idAficion: 5, descripcion: "Leer" });
    almacenAficion.add({ idAficion: 6, descripcion: "Baloncesto" });
    almacenAficion.add({ idAficion: 7, descripcion: "Bailar" });
    almacenAficion.add({ idAficion: 8, descripcion: "programar" });
    almacenAficion.add({ idAficion: 9, descripcion: "series" });
    almacenAficion.add({ idAficion: 10, descripcion: "musica" });
    almacenAficion.add({ idAficion: 11, descripcion: "Poker" });

    // Añadir datos iniciales a "usuario_aficion"
    var almacenUsuarioAficion = transaccion.objectStore("usuario_aficion");
    almacenUsuarioAficion.add({id: 1, idUsuario: "juan@gmail.com", idAficion: 1 });
    almacenUsuarioAficion.add({id: 2, idUsuario: "ana@gmail.com", idAficion: 2 });
    almacenUsuarioAficion.add({id: 3, idUsuario: "juan@gmail.com", idAficion: 4 });
    almacenUsuarioAficion.add({id: 4, idUsuario: "ana@gmail.com", idAficion: 5 });
    almacenUsuarioAficion.add({id: 5, idUsuario: "juan@gmail.com", idAficion: 6 });
    almacenUsuarioAficion.add({id: 6, idUsuario: "ana@gmail.com", idAficion: 7 });
    almacenUsuarioAficion.add({id: 7, idUsuario: "juan@gmail.com", idAficion: 8 });
    almacenUsuarioAficion.add({id: 8, idUsuario: "ana@gmail.com", idAficion: 9 });
    almacenUsuarioAficion.add({id: 9, idUsuario: "ibai@gmail.com", idAficion: 5 });
    almacenUsuarioAficion.add({id:10, idUsuario: "ibai@gmail.com", idAficion: 2 });
    almacenUsuarioAficion.add({id: 11, idUsuario: "ibai@gmail.com", idAficion: 8 });
    almacenUsuarioAficion.add({id: 12, idUsuario: "pedro@gmail.com", idAficion: 1 });
    almacenUsuarioAficion.add({id: 13, idUsuario: "pedro@gmail.com", idAficion: 3 });
    almacenUsuarioAficion.add({id: 14, idUsuario: "pedro@gmail.com", idAficion: 5 });
    almacenUsuarioAficion.add({id: 15, idUsuario: "uxue@gmail.com", idAficion: 2 });
    almacenUsuarioAficion.add({id: 16, idUsuario: "uxue@gmail.com", idAficion: 3 });
    almacenUsuarioAficion.add({id: 17, idUsuario: "uxue@gmail.com", idAficion: 7 });

    // Añadir datos iniciales a "meGusta"
    var almacenMeGusta = transaccion.objectStore("meGusta");
    almacenMeGusta.add({ id: 1, idUsuario: "juan@gmail.com", idUsuarioMeGusta: "ana@gmail.com" });
    almacenMeGusta.add({ id: 2, idUsuario: "ana@gmail.com", idUsuarioMeGusta: "juan@gmail.com" });
    almacenMeGusta.add({ id: 3, idUsuario: "ibai@gmail.com", idUsuarioMeGusta: "lucia@gmail.com" });
    almacenMeGusta.add({ id: 4, idUsuario: "lucia@gmail.com", idUsuarioMeGusta: "ibai@gmail.com" });
    almacenMeGusta.add({ id: 5, idUsuario: "pablo@gmail.com", idUsuarioMeGusta: "ane@gmail.com" });
    almacenMeGusta.add({ id: 6, idUsuario: "ane@gmail.com", idUsuarioMeGusta: "pablo@gmail.com" });
    almacenMeGusta.add({ id: 7, idUsuario: "unax@gmail.com", idUsuarioMeGusta: "ana@gmail.com" });
    almacenMeGusta.add({ id: 8, idUsuario: "ana@gmail.com", idUsuarioMeGusta: "uxue@gmail.com" });
    almacenMeGusta.add({ id: 9, idUsuario: "alazne@gmail.com", idUsuarioMeGusta: "marcos@gmail.com" });
    almacenMeGusta.add({ id: 10, idUsuario: "ibai@gmail.com", idUsuarioMeGusta: "laura@gmail.com" });
    almacenMeGusta.add({ id: 11, idUsuario: "pedro@gmail.com", idUsuarioMeGusta: "ane@gmail.com" });
    almacenMeGusta.add({ id: 12, idUsuario: "june@gmail.com", idUsuarioMeGusta: "pedro@gmaile.com" });

    transaccion.oncomplete = function() {
        console.log("Datos iniciales cargados exitosamente.");
    };

    transaccion.onerror = function(evento) {
        console.error("Error al cargar los datos iniciales:", evento.target.error);
    };
}


function handleLogin() {
    var nombre = document.getElementById("username").value.trim();
    var contraseña = document.getElementById("contraseña").value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === "" || contraseña === "") {
        alert("Por favor, completa todos los campos antes de iniciar sesión.");
        return; // Salir de la función si los campos están vacíos
    }

    // Iniciar una transacción de solo lectura en la colección "usuario"
    var transaccion = bd.transaction(["usuario"], "readonly");
    var almacen = transaccion.objectStore("usuario");
    var indice = almacen.index("buscarPorNombre");

    // Buscar el usuario por su nombre
    var solicitud = indice.get(nombre);

    solicitud.onsuccess = function(evento) {
        var usuario = evento.target.result;

        if (usuario) {
            // Verificar si la contraseña es correcta
            if (usuario.contraseña === contraseña) {
                sessionStorage.setItem("emailUsuario", usuario.email);
                sessionStorage.setItem("nombreUsuario", usuario.nombre);
                
                
                sessionStorage.setItem(usuario.email, JSON.stringify(usuario));
                
                alert("Inicio de sesión exitoso. Bienvenido, " + usuario.nombre);
                window.location.href = "indexLogeado.html";
            } else {
                alert("Contraseña incorrecta");
            }
        } else {
            alert("Usuario no encontrado");
        }
    };

    solicitud.onerror = function(evento) {
        console.error("Error al buscar el usuario: " + evento.target.error);
    };
}

window.addEventListener("load", iniciar);

