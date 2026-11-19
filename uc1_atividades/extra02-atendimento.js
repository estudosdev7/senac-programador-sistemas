const opcao = 1;
const preco = 40;
const quantidade = 3;
switch (opcao) {
  case 1: {
    const total = preco * quantidade;
    let desconto = 0;
    if (total >= 100 && quantidade >= 3) {
      desconto = total * 0.1;
    } else {
      desconto = 0;
    }
    const final = total - desconto;
    console.log("Total: R$", total.toFixed(2));
    console.log("Desconto: R$", desconto.toFixed(2));
    console.log("A pagar: R$", final.toFixed(2));
    break;
  }
  case 2:
    console.log("Atendimento: consulta de produtos.");
    break;
  default:
    console.log("Opção inválida.");
}
