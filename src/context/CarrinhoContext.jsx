import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarItem(produto) {
    setItens((prev) => {
      const jaExiste = prev.find((item) => item.id === produto.id);
      if (jaExiste) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
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

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem, totalItens }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}