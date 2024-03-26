/*
Nome 1: Elisa 
Nome 2: Nathália 
Nome 3: Pedro Otávio
Nome 4: Maria Eduarda
Nome 5: Joui Bomfim

4 - Escreva um programa que leia as medidas dos lados de um triângulo e 
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/

const teclado = require (`prompt-sync`)();

let lado1: number = parseFloat(teclado(`Digite o primeiro lado:`));
let lado2: number = parseFloat(teclado(`Digite o segundo lado:`));
let lado3: number = parseFloat(teclado(`Digite o terceiro lado:`));

if (lado1 == lado2 && lado1 == lado3 && lado3 == lado2){
    console.log(`O Triângulo é Equilátero, ele possui os três lados iguais!!`);
}
else if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2){
    console.log(`O Triângulo é Escaleno, ele possui os três lados diferentes!!`);
}
else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
    console.log(`O Triângulo é Isósceles, ele possui pelo menos dois lados iguais!!`);
}
else{
    console.log(`Algo deu errado`);
}