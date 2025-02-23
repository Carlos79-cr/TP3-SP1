import { leerSuperheroe } from "./utils.mjs";

//Leer y mostrar la lista de superheroes ordenada
const superheroes = leerSuperheroe('./superheroes.txt');
console.log('Superheroes ordenados: ');
console.log(superheroes);