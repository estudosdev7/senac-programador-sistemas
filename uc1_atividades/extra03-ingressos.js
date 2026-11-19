const readline = require("node:readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    console.log(`
    1 - Manhã (R$ 20,00)
    2 - Tarde (R$ 28,00)
    3 - Noite (R$ 35,00)`);

    const opcaoTexto = await rl.question("Sessão (1 a 3): ");
    const idadeTexto = await rl.question("Idade: ");
    const quantidadeTexto = await rl.question("Quantidade (1 a 5): ");
    const associado = (await rl.question("Associado (sim/não): "))
      .trim()
      .toLowerCase();
    const cupom = (await rl.question("Cupom (sim/não): ")).trim().toLowerCase();

    const opcao = Number(opcaoTexto);
    const idade = Number(idadeTexto);
    const quantidade = Number(quantidadeTexto);

    if (!Number.isInteger(opcao) || opcao < 1 || opcao > 3) {
      console.log("Erro: sessão inválida. Escolha 1, 2 ou 3.");
      return;
    } else if (
      idadeTexto.trim() === "" ||
      !Number.isInteger(idade) ||
      idade < 0 ||
      idade > 120
    ) {
      console.log("Erro: idade deve ser um inteiro entre 0 e 120.");
      return;
    } else if (
      quantidadeTexto.trim() === "" ||
      !Number.isInteger(quantidade) ||
      quantidade < 1 ||
      quantidade > 5
    ) {
      console.log("Erro: quantidade deve ser um inteiro entre 1 e 5.");
      return;
    } else if (
      associado !== "sim" &&
      associado !== "não" &&
      associado !== "nao"
    ) {
      console.log("Erro: responda sim ou não para associado.");
      return;
    } else if (cupom !== "sim" && cupom !== "não" && cupom !== "nao") {
      console.log("Erro: responda sim ou não para cupom.");
      return;
    }

    let sessao = "";
    let preco = 0;

    switch (opcao) {
      case 1:
        sessao = "Manhã";
        preco = 20;
        break;
      case 2:
        sessao = "Tarde";
        preco = 28;
        break;
      case 3:
        sessao = "Noite";
        preco = 35;
        break;
    }

    let desconto = 0;

    if (idade <= 12) {
      desconto = 50;
    } else if (idade >= 60) {
      desconto = 30;
    } else {
      desconto = 0;
    }

    if (associado === "sim" && quantidade >= 2) {
      desconto += 10;
    }

    if (cupom === "sim" && (opcao === 1 || opcao === 2)) {
      desconto += 5;
    }

    let limiteAplicado = false;

    if (desconto > 60) {
      desconto = 60;
      limiteAplicado = true;
    }

    const subtotal = preco * quantidade;
    const valorDesconto = (subtotal * desconto) / 100;
    const total = subtotal - valorDesconto;

    const mensagem = desconto > 0 ? "Benefício aplicado" : "Preço integral";

    console.log("\n--- RESUMO DA COMPRA ---");
    console.log("Sessão:", sessao);
    console.log("Preço unitário: R$", preco.toFixed(2));
    console.log("Quantidade:", quantidade);
    console.log("Subtotal: R$", subtotal.toFixed(2));
    console.log("Desconto total:", desconto + "%");
    console.log("Total a pagar: R$", total.toFixed(2));
    console.log(mensagem);

    if (limiteAplicado) {
      console.log("Desconto máximo aplicado");
    }
  } finally {
    rl.close();
  }
}

main().catch(console.error);
