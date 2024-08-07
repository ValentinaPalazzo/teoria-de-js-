/*)
if (option == 0) {
  document.write("<p>hoy es Domingo</p>");
} else if (option == 1) {
  document.write("<p>hoy es lunes</p>");
} else if (option == 2) {
  document.write("<p>hoy es martes</p>");
} else if (option == 3) {
  document.write("<p>hoy es miercoles</p>");
} else {
  document.write("<p>valor invalido</p>");
}
*/
// estrucutura de switch: switch(variable){casis q pueden pasar}
do {
  const option = parseInt(
    prompt("ingresa un valor ;0-domingo, 1-lunes, 2-martes, 3-miercoles.")
  );
  switch (option) {
    case 0:
      document.write("<p>hoy es Domingo</p>");
      break;
    case 1:
      document.write("<p>hoy es lunes</p>");
      break;
    case 2:
      document.write("<p>hoy es martes</p>");
      break;
    case 3:
      document.write("<p>hoy es miercoles</p>");
      break;
    default:
      document.write("<p>valor invalido</p>");
  }
} while (confirm("quieres realizar esta operacion?"));

const prueba = confirm("quieres realizar esta operacion?");
