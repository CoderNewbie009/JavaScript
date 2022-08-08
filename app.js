
function probarCodigo(){

/*
DESAFIO 3 usa Arrays para agrgar documentos necesarios a un embarque internacional
*/
const documentos = [];
let   cantidad     = 3;//Debe indicar al menos 3 documentos que tenga del embarque
do{
   let entrada = prompt("Ingresar N° de Factura, N° de Documento de Transporte y N° del Seguro");
   documentos.push(entrada.toUpperCase());
   console.log(documentos.length);
}while(documentos.length != cantidad)
//Concatenamos un nuevo array con mensaje de agradecimiento con salto de página
const nuevaLista = documentos.concat(["Gracias por entregar la información solictada"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
}