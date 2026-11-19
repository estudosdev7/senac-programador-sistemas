const produto = "Caderno";
const precoUnitario = 40;
const quantidade = 4;
const descontoPercentual = 10;
const subtotal = precoUnitario * quantidade;
const valorDesconto = subtotal * (descontoPercentual / 100);
const total = subtotal - valorDesconto;
const pedidoValido =
  precoUnitario > 0 &&
  quantidade > 0 &&
  descontoPercentual >= 0 &&
  descontoPercentual <= 100;
const freteGratis = total >= 100 || quantidade >= 3;
const ofertaEspecial = total >= 100 || quantidade >= 5;
console.log("Produto:", produto);
console.log("Preço unitário: R$", precoUnitario.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Desconto (%):", descontoPercentual);
console.log("Subtotal: R$", subtotal.toFixed(2));
console.log("Desconto: R$", valorDesconto.toFixed(2));
console.log("Total: R$", total.toFixed(2));
console.log("Pedido válido:", pedidoValido);
console.log("Frete grátis:", freteGratis);
console.log("Oferta especial:", ofertaEspecial);
