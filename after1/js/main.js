// SIMULADOR DE PRESTAMOS
// Entradas
const TNA = 137.50;
const TEA = 267.92;
const CFTEA = 375.60;
const descuentoEstudiante = 10;
const montoSolicitadoMax = 5000000;
let interesPaquete;
let interesCuota;
let estudiante = "NO";

// Preguntar si sos Estudiante de Coder
let sosEstudiante = ingresarEstudiante();

// Preguntar por tu Tipo de Paquete
let tipoPaquete = ingresarTipoPaquete();
interesPaquete = calcularInteresPaquete(tipoPaquete);

// Preguntar por el Monto del Préstamo
let montoSolicitado = ingresarMontoSolicitado();

// Preguntar por la Cantidad de Cuotas
let cuotas = solicitarCuotas();
interesCuota = calcularInteresCuota(cuotas);

// Cálculos de Interes
let valorCuota = calculoValorCuota();

// Salida
let salida = informarCalculoPrestamo(); 
alert(salida);
console.log(salida);