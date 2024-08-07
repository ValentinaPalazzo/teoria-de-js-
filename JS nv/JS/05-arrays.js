// forma que tiene js de guardar varios datos, tiene varios compartentos,
//puedo guardar dentro de ellos cualquier tipo de datos valido de js, generalmente se asocia a
//lista de datos, no hay limite en l cntidad de datos que almacena la variable
//COMO SE DECLARAN? pueden ser vacios o con datos
//Vacios: si esta vacio es una variable  mas
// cimuenza con const se puede crfear con let pero genera problemas buenas practicas es con const
//estrucutra:
// const peliculas =[]; def var luego nombro luego igual y corchetes asi entiende js q es una var arrays

// arrays condatos:
const series = [
  "friends",
  "the house of dragons",
  "the nanny,",
  4,
  "the big bang theory",
  true,
  "bridgerton",
]; // aunque sea const puedo MODIFICARLO
// siempre el primer elemento de un arrays esta en posicion 0, cantidad de elementos en el arrays
document.write(
  `<p> Cantidad de elementos en el array de series:${series.length}</p>`
);

document.write(`<p> Primer elemento del array de series:${series[0]}</p>`);

document.write(
  `<p> ultimo elemento del array de series:${series[series.length - 1]}</p>`
);

//mostrar los elementos del arrays
document.write("<ul>");

for (let i = 0; i < series.length; i++) {
  document.write(`<li>item:${series[i]}</li>`);
}

document.write("</ul>");

// agregsr elementos de arrays

series.unshift("vikings", 2024); // agtrega como primer elemento solo al principio

//mostrar los elementos del arrays co el agregado
document.write("<ul>");

for (let i = 0; i < series.length; i++) {
  document.write(`<li>item:${series[i]}</li>`);
}

document.write("</ul>");

// agregar elementos al final

series.push("breaking bad");

document.write("<ul>");

for (let i = 0; i < series.length; i++) {
  document.write(`<li>item:${series[i]}</li>`);
}

document.write("</ul>");

// agregar elementos en el medio del Array

//quiero agregar elementos por elemplo en la posicion 4, esta forma sirve para borrar elementos tambien

series.splice(3, 0, "Avatar");

document.write("<ul>");

for (let i = 0; i < series.length; i++) {
  document.write(`<li>item:${series[i]}</li>`);
}

document.write("</ul>");

// metodos para borrar elementos del array
// primera opcion shift

series.shift(); // solo borra el primer elemento del array

document.write("<ul>");

for (let i = 0; i < series.length; i++) {
  document.write(`<li>item:${series[i]}</li>`);
}

document.write("</ul>");

// borro el ultimo elemento del arry

series.pop();

document.write("<ul>");

for (let i = 0; i < series.length; i++) {
  document.write(`<li>item:${series[i]}</li>`);
}

document.write("</ul>");

