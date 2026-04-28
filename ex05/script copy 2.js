let numeroInicial = Number(prompt("Digite o primeiro número:"));
let numeroFinal = Number(prompt("Digite o segundo número:"));
let mensagem = "";

for (let contador = numeroInicial + 1; contador < numeroFinal; contador++) {
    
    if (contador % 2 === 0) {
        mensagem = ` ${mensagem} ${contador}`;
    }
}

alert(`Os números pares entre ${numeroInicial} e ${numeroFinal} são: ${mensagem}`);