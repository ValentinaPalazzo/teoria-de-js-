/* condicionales que son, cuando quiero hacer una pregunta con respuesta del sistema que tiene dif respuestas 
if se utiliza junto con una condicion logica que es una pregunta usando enrtre llaves si ae cumple la condicion logica 
ej if (esto se cumple){ se ejecuta las lineas dentro de las llaves} si no se cumple omite estas y siguecon el codigo 
de abajo 
// ej de enunciado preograma q solicita al usuario edad y dice si es mayor de edad o no en document o alert

// primero le pido al usuario su edad con promt

const edad = parseInt(prompt("Ingrese si edad")); // transformo en formato numerico el texto que me da co el parseint num ent  quita las comillas para trabajar en formato adecuado

console.log(edad); //NaN not a number no puede parsear porq intenta hacerlo con null

// vamos a preguntar si el numero es valido
// operadores logicos AND &&
// OR ||
// NOT !
if (edad >= 1 && edad <= 100) {
  if (edad >= 18) {
    document.write(
      "La edad ingresada " + edad + " corresponde a alguien mayor de edad"
    );
  } else {
    document.write(
      "La edad ingresada " + edad + " corresponde a alguien menor de edad"
    );
  }
} else {
  document.write("no ingresaste un número válido");
}

console.log(edad);

// con el else es una condicional doble, solo el if es simple, puedo anidarlas como se demuestra arriba

// 16 a 65 es obligatorio votar
// 16 y 17, 65- es optativo
// menores de 16 no pueden votar

*/

const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18 && edad <= 65) {
  document.write(
    `ingresaste la edad de: ${edad} años,estas obligada/o a votar ` // alternativa de cerray y abrir comillas
  );

}
else{
    if(edad == 16 || edad == 17 || edad > 65) {document.write(`ingresaste la edad de ${edad} años, es optativo votar`)}
    else( document.write(`ingresastela edad de ${edad} años, no puedes votar`))
}