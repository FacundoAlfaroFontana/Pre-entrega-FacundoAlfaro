// Variables _________________________________________________________
let user_name = prompt("Ingrese su nombre de usuario: ");
let dni = prompt("Ingrese su DNI: ");
let peso, distancia, largo, ancho, alto;
const COSTO_POR_KG = 500; // costo por kg
const COSTO_POR_KM = 1000; // costo por km
const COSTO_POR_CM3 = 0.05; // costo por cm³

// Función para solicitar un valor válido___________-__________--_______________
function solicitarValor(mensaje) {
    let valor;
    do {
        valor = parseFloat(prompt(mensaje));
        if (valor <= 0 || isNaN(valor)) {
            alert("Por favor, ingrese un valor válido mayor a 0.");
        }
    } while (valor <= 0 || isNaN(valor));
    return valor;
}
// Programa ______________________________________________________________
peso = solicitarValor("Ingrese el peso del paquete en kg: ");
distancia = solicitarValor("Ingrese la distancia del envío en km: ");
largo = solicitarValor("Ingrese el largo del paquete en cm: ");
ancho = solicitarValor("Ingrese el ancho del paquete en cm: ");
alto = solicitarValor("Ingrese el alto del paquete en cm: ");
let volumen = largo * ancho * alto; // volumen en cm³

let costoPorVolumen = volumen * COSTO_POR_CM3; // costo basado en el volumen
let costoPorPeso = peso * COSTO_POR_KG; // costo basado en el peso
let costoPorDistancia = distancia * COSTO_POR_KM; // costo basado en la distancia
let costoTotal = costoPorPeso + costoPorDistancia + costoPorVolumen; // costo total del envío

alert(`Usuario ${user_name} (DNI: ${dni}), el costo de envío para su paquete es de $${costoTotal.toFixed(2)}.`);
