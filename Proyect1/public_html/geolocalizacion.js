/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let map;
let bd;

// Iniciar el mapa de Google Maps
function iniciarMap() {
    navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: userLat, lng: userLng },
            zoom: 14
        });

        // Crear un marcador para la ubicación del usuario
        new google.maps.Marker({
            position: { lat: userLat, lng: userLng },
            map,
            title: "Tu ubicación"
        });
    });
}

// Calcular distancia entre dos puntos geográficos usando Haversine
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Obtener usuarios dentro del radio seleccionado
function buscarPorGeolocalizacion() {
    navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const radio = parseFloat(document.getElementById("radio").value);

        const solicitud = indexedDB.open("vitomaitexx", 1);

        solicitud.onsuccess = function (evento) {
            bd = evento.target.result;
            const transaccion = bd.transaction(["usuario"], "readonly");
            const almacen = transaccion.objectStore("usuario");

            const solicitudUsuarios = almacen.getAll();
            solicitudUsuarios.onsuccess = function (evento) {
                const usuarios = evento.target.result;
                usuarios.forEach(usuario => {
                    if (usuario.latitud && usuario.longitud) {
                        const distancia = calcularDistancia(userLat, userLng, usuario.latitud, usuario.longitud);
                        if (distancia <= radio) {
                            // Agregar marcador al mapa
                            const marcador = new google.maps.Marker({
                                position: { lat: usuario.latitud, lng: usuario.longitud },
                                map,
                                title: usuario.nombre
                            });

                            const infoWindow = new google.maps.InfoWindow({
                                content: `<div><strong>${usuario.nombre}</strong><br>Edad: ${usuario.edad} años</div>`
                            });

                            marcador.addListener("click", () => {
                                infoWindow.open(map, marcador);
                            });
                        }
                    }
                });
            };

            solicitudUsuarios.onerror = function () {
                console.error("Error al obtener los usuarios.");
            };
        };

        solicitud.onerror = function () {
            console.error("Error al abrir la base de datos.");
        };
    });
}


