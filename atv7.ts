/*
Nome 1: Elisa
Nome 2: Nathália
Nome 3: Pedro Otávio
Nome 4: Maria Eduarda
Nome 5: Joui Bomfim

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos) 
*/

let escolha: number = 0;

do{
    const teclado = require (`prompt-sync`)();
    
    let n1: number = parseFloat(teclado(`Digite um valor para n1:`));
    let n2: number = parseFloat(teclado(`Digite um valor para n2:`));

    let total: number = (n1+n2);
    console.log(`O resultado de ${n1} + ${n2} é igual a ${total}`);

    
    console.log(`Para continuar clique em 1`);
    console.log(`Para finalizar clique em 0`);

    escolha = parseInt(teclado(`Digite sua opção:`));
    
}while(escolha == 1);

console.log(`Fim do programa.`)