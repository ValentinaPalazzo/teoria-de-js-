//es un comentario de solo una linea
/* este es un 
comentario de muchas lineas
pero hay q cerrarla*/

/* declarar o crear una variable: pueden ser var - let - const
var: se pide q no se use
let: cuando quiera crear una vsriable que su valor va a cambiar a lo largo de la vida del programa
const: cuando el valor de la varable NO va a cambiar a lo largo de la vida del programa ej el valor de pi
 en un programa matematico
relgla de sintasis: elijo una de las dos variables let o const en minuscula (js es secible a las mayusculas)
luego elijo un nombre para la variable debe ser intuitivo (reglas no puede arrancar con numero no puede tener
 caracteres especiales ni contener espacios si empieza con mayuscula debe ser un caso especial) ej nombreApellido.
 preferiblemente en ingles no ñ. 
 luego del nombre de la variable le pongo el igual que es el operador de asignacion, asigna rl valor q le doy a la variable 
 nombrada previamente 
 se recomienda cerrar la linea de codigo con ;
*/

let edad = 30; // tipo de dato number, tambien esta el strin que es texto y lleva comillas 2 o s 
let enendido = false;
/* tengo tipos de datos como los gulianos (verdaedro o falso ) se usa mucho es para variable q solo admite 2 valores, true 
or false, es como si o no, solo hay 2 estados de esa variables, este con number y strim son las variables primitivas
hay otras con clases especiales arise q puede almacenar mas de un dato, otro son los objetos, puedo moldearlos a mi gusto
luego esta el vacio o null no hay nada, es la nada msma no 0, o indefides caja q tiene algo pero no se sabe q es.

*/
//mostrar el contenido de una variable en la consola de un navegador 
 console.log(edad)
document.write('<p class="textoResaltado">hola mundo!</p>')/*se ve dentro del docuemnto htmly de esta forma l a disfrazo y se ve como
 html como p */
 document.write('Edad: '+ edad + "<br>")// br para salto de lienea es mala practica 

 //modificar el contenido de una variable 
 /* si es creada con led simplemente la nombro y le asigno un nuevo valor
*/
edad = 30 + 3;

document.write('Edad: ' + edad + "<br>" );


// mostrar en ventanas emergentes
// solo muestra un mensaje al usauario 
alert ("bievenidos")// algunos navegadores ocultan el docuemnto html cuando esgt abierta la ventana emergente 

// si le pide cosas al usuario tiene un imput y debo hacer q guarde el dato ingresado en una variable


prompt("ingrese su edad")

 const edadUsuario = prompt("ingrese su edad")

 console.log(edadUsuario)