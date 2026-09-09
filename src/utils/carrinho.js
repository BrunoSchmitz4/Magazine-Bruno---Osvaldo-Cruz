export function adicionarProduto(itens, produto) {
  const jaExiste = itens.find((item) => item.id === produto.id);

  if (jaExiste) {
    return itens.map((item) =>
      item.id === produto.id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item,
    );
  }

  return [...itens, { ...produto, quantidade: 1 }];
}

export function removerProduto(itens, id) {
  return itens.filter((item) => item.id !== id);
}

export function aumentarQuantidade(itens, id) {
  return itens.map((item) =>
    item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item,
  );
}

// Diminuir até 0 significa tirar o item do carrinho.
export function diminuirQuantidade(itens, id) {
  return itens
    .map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item,
    )
    .filter((item) => item.quantidade > 0);
}

export function contarItens(itens) {
  return itens.reduce((total, item) => total + item.quantidade, 0);
}

export function calcularTotal(itens) {
  return itens.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0,
  );
}
