import {
  adicionarProduto,
  removerProduto,
  aumentarQuantidade,
  diminuirQuantidade,
  contarItens,
  calcularTotal,
} from "./carrinho";

// Produtos de mentira ("fixtures") usados só nos testes.
const mouse = { id: 1, nome: "Mouse Gamer 1", preco: 100 };
const teclado = { id: 2, nome: "Teclado Mecânico 2", preco: 250 };

describe("adicionarProduto", () => {
  test("coloca o produto no carrinho vazio com quantidade 1", () => {
    const carrinho = adicionarProduto([], mouse);

    expect(carrinho).toHaveLength(1);
    expect(carrinho[0].nome).toBe("Mouse Gamer 1");
    expect(carrinho[0].quantidade).toBe(1);
  });

  test("não duplica a linha: soma na quantidade do item existente", () => {
    let carrinho = adicionarProduto([], mouse);
    carrinho = adicionarProduto(carrinho, mouse);

    expect(carrinho).toHaveLength(1);
    expect(carrinho[0].quantidade).toBe(2);
  });

  test("produtos diferentes viram linhas diferentes", () => {
    let carrinho = adicionarProduto([], mouse);
    carrinho = adicionarProduto(carrinho, teclado);

    expect(carrinho).toHaveLength(2);
  });

  test("não altera o carrinho original (imutabilidade)", () => {
    const original = [];
    adicionarProduto(original, mouse);

    expect(original).toHaveLength(0);
  });
});

describe("removerProduto", () => {
  test("tira o item pelo id", () => {
    const carrinho = [
      { ...mouse, quantidade: 3 },
      { ...teclado, quantidade: 1 },
    ];

    expect(removerProduto(carrinho, 1)).toEqual([{ ...teclado, quantidade: 1 }]);
  });

  test("remover um id inexistente não muda nada", () => {
    const carrinho = [{ ...mouse, quantidade: 1 }];
    expect(removerProduto(carrinho, 999)).toHaveLength(1);
  });
});

describe("aumentarQuantidade / diminuirQuantidade", () => {
  test("aumenta de 1 em 1", () => {
    const carrinho = aumentarQuantidade([{ ...mouse, quantidade: 1 }], 1);
    expect(carrinho[0].quantidade).toBe(2);
  });

  test("diminui de 1 em 1", () => {
    const carrinho = diminuirQuantidade([{ ...mouse, quantidade: 3 }], 1);
    expect(carrinho[0].quantidade).toBe(2);
  });

  test("ao chegar em zero, o item sai do carrinho", () => {
    const carrinho = diminuirQuantidade([{ ...mouse, quantidade: 1 }], 1);
    expect(carrinho).toHaveLength(0);
  });

  test("mexer em um item não afeta os outros", () => {
    const carrinho = aumentarQuantidade(
      [
        { ...mouse, quantidade: 1 },
        { ...teclado, quantidade: 5 },
      ],
      1,
    );

    expect(carrinho[1].quantidade).toBe(5);
  });
});

describe("contarItens", () => {
  test("soma as quantidades, não o número de linhas", () => {
    const carrinho = [
      { ...mouse, quantidade: 2 },
      { ...teclado, quantidade: 3 },
    ];

    expect(contarItens(carrinho)).toBe(5);
  });

  test("carrinho vazio conta zero", () => {
    expect(contarItens([])).toBe(0);
  });
});

describe("calcularTotal", () => {
  test("multiplica preço por quantidade e soma tudo", () => {
    const carrinho = [
      { ...mouse, quantidade: 2 }, // 200
      { ...teclado, quantidade: 1 }, // 250
    ];

    expect(calcularTotal(carrinho)).toBe(450);
  });

  test("carrinho vazio custa zero", () => {
    expect(calcularTotal([])).toBe(0);
  });
});
