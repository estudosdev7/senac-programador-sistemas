
const readline = require('node:readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function perguntar(texto) {
    return new Promise((resolver) => rl.question(texto, resolver));
}

async function iniciar() {
    console.log('=== PAPELARIA ===\n1 - Caderno (R$ 20,00)\n2 - Caneta (R$ 5,00)\n3 - Sair');

    const opcao = Number(await perguntar('Escolha uma opção: '));

    let produto = '';
    let preco = 0;

    switch (opcao) {
        case 1:
            produto = 'Caderno';
            preco = 20;
            break;

        case 2:
            produto = 'Caneta';
            preco = 5;
            break;

        case 3:
            console.log('Atendimento encerrado');
            return;

        default:
            console.log('Opção inválida');
            return;
    }

    const quantidade = Number(await perguntar('Quantidade: '));

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        console.log('Quantidade inválida');
        return;
    }

    const resposta = (await perguntar('Cliente fidelidade? (S/N): ')).trim().toUpperCase();

    if (resposta !== 'S' && resposta !== 'N') {
        console.log('Fidelidade inválida: digite S ou N');
        return;
    }

    const fidelidade = resposta === 'S';

    const subtotal = preco * quantidade;

    let percentual = 0;

    if (fidelidade && subtotal >= 100) {
        percentual = 15;
    } else if (fidelidade || subtotal >= 100) {
        percentual = 5;
    } else {
        percentual = 0;
    }

    const valorDesconto = subtotal * percentual / 100;

    const total = subtotal - valorDesconto;

    const mensagem = percentual > 0 ? 'Desconto aplicado' : 'Sem desconto';

    console.log('Produto:', produto);
    console.log('Quantidade:', quantidade);
    console.log('Subtotal: R$', subtotal.toFixed(2));
    console.log('Desconto:', percentual + '%');
    console.log('Valor descontado: R$', valorDesconto.toFixed(2));
    console.log('Total final: R$', total.toFixed(2));
    console.log(mensagem);
}

iniciar().finally(() => rl.close());
