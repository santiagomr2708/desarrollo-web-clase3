

console.log("hola mundo");//imprimir en consola

console.log(Math.random());

let edad;
let age=20;
let mensaje = 'hola queridos ususarios ';
var mensaje2 = '20';

console.log(mensaje2.length);
let verdadero=null;
let falso=false;
/*
comentario multilinea
== para comparar el tipo de datos
=== para comparar si son el mismo tipo 
de datos con el mismo valor
*/

const moneda = 'COP';
//const numeroColumnas = 4;
//numeroColumnas = 8;

// funcion de toda la vida
function sumar(num1,num2){
    return num1+num2;
}

//funcion anonima
const hola = function(){
    return 'hola';
}

//funcion de flecha
const suma = (num1,num2)=>{
    return num1+num2;
}

let resultado = suma(3,5);
console.log('el resultado es: '+resultado);

//funcion tipo flecha que no recibe parametros
const saludo = () =>{
    return 'hola a todos'
}
console.log(saludo())

//funcion tipo flecha con varios parametros
const suma2 = (n1,n2,n3)=>{
    return n1+n2+n3;
}
let resultado2 = suma2(4,6,5);
console.log('el resultado es: '+resultado2);

//funcion tipo flecha que recibe un parametro
const suma3 = num =>{
 return num+2;
}
console.log('el resultado de la funcion flecha con 1 parametro es: '+suma3(10));

//arreglo
let numeros = [1,2,3,4,5,6];
//ingresar un dato adicional al final del arreglo
numeros.push(10);

//saca el ultimo elemento
numeros.pop();

console.log(numeros);
//const sacar 

let numeros2 = [1,2,3,4,5,6];

//funcion tipo flecha para el arreglo
const agregar= arreglo =>{
    arreglo.push(7)
    return arreglo;
}

console.log(agregar(numeros2));