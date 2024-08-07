// cuando quiero escribir de forma seguida muchas lineas de codigo iguales para no perder tiempo puedo utilizar bucles
// como el ejemplo de arriba
//bucles : debo saber cuantas veces quiero repetirlo, para q no se trabe y utilice infinitos recursos

// hay 3 tipos while, do while y for

// ejemplo de while

/* while(condicion logica ){todas las lineas de codigo q quiera repetir  AGREGANDO UNA LINEA DE CODIGO QUE HAGA Q SE DEJE DE CUMPLIR}

let numero = 1;

while (numero <= 10) {
  document.write(`<p>Linea numero ${numero}</p>`);
  numero = numero + 1;
}
*/
/* do while su estrucutura es
 do{todas las lineas de codigo mas una linea que haga que la condicion se deje de cumplir }
 while(condicion logica) hace lo que dice las lineas de codigo mientras se cumple lo que dice en while se repite al menos
  una vez al menos  */

let renglon = 1; // sumo cantidades, acumulo siempre uso let
do {
  document.write(`<p>Renglón número ${renglon}</P>`);
  renglon = renglon + 1;
} while (renglon <= 5);

// bucle For: solo se ejecuta cuando la condicion logica se cumple
/* ESTRUCTURA:
  for(inicializar una variable ; condicion logica ; cambiar la condicion){todas las lineas de codigo que quiero repetir}  */

  // bucle de cuenta regresiva

  for(let contador= 10; contador>= 1; contador --){document.write(`<p>cuenta regresiva N°:${contador}</p>`)}

  /* TYengo qpensar que necesita si se tiene q ejecutar solo si la condicion logica se cumple uso un while o un for pero si debe ejecutarse al menos
  una vez utilizo un do while*/ 