/*
Nome 1: Elisa
Nome 2: Nathália
Nome 3: Pedro Otávio
Nome 4: Maria Eduarda
Nome 5: Joui Bomfim

3- Faça um programa que pergunte em que turno você estuda. 
Peça para digitar M- matutino ou V- Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou 
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/

const teclado = require (`prompt-sync`)();
let letra: string = teclado(`Digite o turno em que você estuda com: M para MATUTINO, V para VESPERTINO ou N para NOTURNO:`);

if (letra == `M` || letra == `m`){
    console.log (`Bom Dia!`);
}

else if(letra == `V` || letra == `v`){
    console.log (`Boa Tarde!`);
}

else if(letra == `N` || letra == `n`){
    console.log (`Boa Noite!`);
}

else {
    console.log (`Valor Inválido!`);
}