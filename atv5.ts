/*
Nome 1: Elisa
Nome 2: Nathália
Nome 3: Pedro Otávio
Nome 4: Maria Eduarda
Nome 5: Joui Bomfim

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. 
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura 
(em metros). A tabela a seguir apresenta as faixas deste índice: 
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/

const teclado = require (`prompt-sync`)();
let peso: number = parseFloat(teclado(`Digite o seu peso em kilogramas:`));
let altura: number = parseFloat(teclado(`Digite a sua altura em metros:`));

let imc: number = peso / (altura * altura);

if(imc <18.5){
    console.log(`Baixo peso`);
}
else if(imc >= 18.5 && imc <= 24.99){
    console.log(`Normal`);
}
else if(imc >= 25 && imc <= 29.99){
    console.log(`Sobrepeso`);
}
else if(imc > 30){
    console.log(`Obesidade`);
}
else{
    console.log(`Valor Inválido`)
}