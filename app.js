/*
--SE MODIFICA SEGUN LOS REQUERIMIENTOS DEL DESAFÍO MAS ABAJO NUEVO CODIGO--
Se solicta el ingreso de un número entero, el cual, se suma el entero 10 y entrega el esultado por pantalla
let numero1 = prompt('Ingresar un número entero');
let resultado = parseInt(numero1) + 10;
alert(resultado);
*/

//NUEVO CODIGO MEJORADO (RESERVA DE LIBROS PARA FACULTAD)

function probarCodigo(){

let libro;
let facultad;
let nombre;
for(let i=1;i<=3;i++)//Sólo se puede reservar 3 veces.
{
libro=prompt("Ingresa el libro que necesitas reservar.");
facultad=prompt("Indica la facultad en la que estudias.");
nombre=prompt("Indica tu nombre y apellido para poder generar la reserva del libro.");
console.log("El libro que quieres reservar es: "+ libro);
console.log("La facultad en la que estudias es: "+ facultad);
console.log("La reserva quedó regitrada a nombre de : "+ nombre);
alert("Muchas gracias, la reserva ha quedado registrada a nombre de: " + nombre);//Da las gracias por cada reserva
}

}