const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularElodoJogador(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    const mensagem = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
    return mensagem;
}

rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
        const mensagem = calcularElodoJogador(vitorias, derrotas);
        console.log(mensagem);
        rl.close();
    });
});