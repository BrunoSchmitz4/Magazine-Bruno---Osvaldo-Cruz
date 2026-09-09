import { createContext, useContext, useState, useEffect } from "react";
// As regras de negócio agora moram em src/utils/carrinho.js, fora do React.
// Aqui ficou só o ESTADO: o que muda na tela.
import * as regras from "../utils/carrinho";

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
    setItens((prev) => regras.adicionarProduto(prev, produto));
  }

  function removerItem(id) {
    setItens((prev) => regras.removerProduto(prev, id));
  }

  function totalItens() {
    return regras.contarItens(itens);
  }

  function diminuirQuantidade(id) {
    setItens((prev) => regras.diminuirQuantidade(prev, id));
  }

  function aumentarQuantidade(id) {
    setItens((prev) => regras.aumentarQuantidade(prev, id));
  }

  function valorTotal() {
    return regras.calcularTotal(itens);
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
