/*
Nome 1: Elisa
Nome 2: Nathália
Nome 3: Pedro Otávio
Nome 4: Maria Eduarda
Nome 5: Joui Bomfim

2 - Escreva um programa que receba três números inteiros 
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/

const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`Digite o primeiro número`));
let n2: number = parseFloat(teclado(`Digite o segundo número`));
let n3: number = parseFloat(teclado(`Digite o terceiro número`));

let maior: number = 0;
let mediano: number = 0;
let menor: number = 0;

if (n1 > n2 && n1> n3){
    maior=n1
    if (n1 > n3){
        mediano=n2
        menor=n3
    }
}

else if(n2 > n1 && n2 > n3){
    maior=n2
    if (n1 > n3){
        mediano=n1
        menor=n3
    }
    else{
        mediano=n2
        menor=n1
    }
}

else if(n3 > n1 && n3 > n2){
    maior=n3

    if (n1 > n2){
        mediano=n1
        menor=n2
    }
    else{
        mediano=n2
        menor=n1
    }
}

console.log (`A ordem decrescente dos números digitados é ${maior}, ${mediano} e ${menor}.`)