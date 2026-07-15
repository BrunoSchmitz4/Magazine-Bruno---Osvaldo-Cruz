import { createContext, useContext, useState, useEffect } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(() => {
    const salvo = localStorage.getItem("carrinho");
    return salvo ? JSON.parse(salvo) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itens));
  }, [itens]);

  const [pedidos, setPedidos] = useState([]);

  function adicionarItem(produto) {
    setItens((prev) => {
      const jaExiste = prev.find((item) => item.id === produto.id);
      if (jaExiste) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function removerItem(id) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  function totalItens() {
    return itens.reduce((acc, item) => acc + item.quantidade, 0);
  }

  function diminuirQuantidade(id) {
    setItens((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item,
        )
        .filter((item) => item.quantidade > 0),
    );
  }

  function aumentarQuantidade(id) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function valorTotal() {
    return itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0,
    );
  }

  function finalizarCompra() {
    if (itens.length === 0) return;

    const novoPedido = {
      id: Date.now(),
      data: new Date().toLocaleDateString("pt-BR"),
      itens: itens,
      total: valorTotal(),
    };

    setPedidos((prev) => [...prev, novoPedido]);
    setItens([]);
  }

  return (
    <CarrinhoContext.Provider
      value={{ itens, pedidos, adicionarItem, removerItem, totalItens, valorTotal, aumentarQuantidade, diminuirQuantidade, finalizarCompra }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
