
function probarCodigo(){
/*
ENTREGAR AL USUARIO EL VALOR ADUANERO ([VALOR FACTURA+FLETE+SEGURO]-DESCUENTO) Y LOS DERECHOS + IMPUESTOS (IVA+ADVALOREM)
*/
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.19;//IVA en CL 19%
const advalorem = x => x * 0.06;//derechos ad-valorem 6%

//Ingresar el valor de la factura de importación
let precio;
precio=parseInt(prompt("Ingrese el valor de la factura de Importación"));
//Ingresar valor del flete internacional
let flete;
flete=parseInt(prompt("Ingrese el valor del flete internacional"));
//Ingresar valor del seguro internacional
let seguro;
seguro=parseInt(prompt("Ingrese el valor del seguro internacional"));
//Ingresar el descuento por volumen
let descuento;
descuento=parseInt(prompt("Ingrese el valor del descuento por volumen"));

//Calcular el valor aduanero y entregar por consola + ventana al usuario
let valorAduanero=resta(suma(precio,flete,seguro),descuento);
console.log(valorAduanero);
alert("El Valor Aduanero para entregar al Servicio Nacional de Aduanas es : " + valorAduanero);
//Calcular los derechos e impuestos que se deben pagar al estado
let derechosImpuestos = suma(iva(precio),advalorem(precio));
console.log(derechosImpuestos);
alert("Los Derechos e Impuestos que debe pagar al Estado es la suma de  : " + derechosImpuestos);
}