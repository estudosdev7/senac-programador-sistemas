const preco = 39.90;
const quantidade = 3;
const taxaDesconto = 0.10;

const total =  preco * quantidade;
const desconto = total * taxaDesconto;
const valorTotal = total - desconto;

console.log(` 
    --------------------------------------------
    Preço do Produto: R$ ${preco.toFixed(2)}
    Quantidade: ${quantidade}
    Valor total: ${total.toFixed(2)}
    Desconto (10%): R$ ${desconto.toFixed(2)}
    Valor final a pagar: R$ ${valorTotal.toFixed(2)}
    --------------------------------------------
    `)

