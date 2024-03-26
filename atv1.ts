/*
Nome 1: Elisa
Nome 2: Nathália
Nome 3: Pedro Otávio
Nome 4: Maria Eduarda 
Nome 5: Joui Bomfim

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/

const teclado = require (`prompt-sync`)();

let numero: number = teclado(`Digite um número:`);

let divisor: number = 2;
let dividendo = numero;
let resto: number = 0;

resto = dividendo % divisor;

if (resto == 0){
console.log(`Número digitado ${dividendo} é par!`);
}

else if (resto == 1){
    console.log(`Número digitado ${dividendo} é ímpar!`);
}

else{
    console.log (`Algo deu errado!!`);
}