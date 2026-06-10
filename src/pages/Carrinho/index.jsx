import { useCarrinho } from "../../context/CarrinhoContext";

export default function Carrinho() {
  const { itens, removerItem } = useCarrinho();

  if (itens.length === 0) return <p>Seu carrinho está vazio.</p>;

  return (
    <section>
      <h2>Carrinho 🛒</h2>
      {itens.map((item) => (
        <div key={item.id}>
          <strong>{item.nome}</strong> — {item.quantidade}x — R${" "}
          {(item.preco * item.quantidade).toFixed(2)}
          <button onClick={() => removerItem(item.id)}>Remover</button>
        </div>
      ))}
    </section>
  );
}