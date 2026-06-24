import { useCarrinho } from "../../context/CarrinhoContext";
import styles from "./Carrinho.module.css";

export default function Carrinho() {
  const { itens, removerItem, aumentarQuantidade, diminuirQuantidade } = useCarrinho();

  if (itens.length === 0) return <p>Seu carrinho está vazio.</p>;

  // Dicas de Site:
  // Google Fonts: https://fonts.google.com/
  // Flaticon: https://www.flaticon.com/
  // Coolors: https://coolors.co/
  return (
    <section>
      <h2 className={styles.tituloCarrinho}>Seu Carrinho</h2>
      <div className={styles.containerCarrinho}>
        {itens.map((item) => (
          <div key={item.id}>
            <strong>{item.nome}</strong> — {item.quantidade}x — R${" "}
            {(item.preco * item.quantidade).toFixed(2)}

          <div>
            <button onClick={() => diminuirQuantidade(item.id)}>-</button>
            <span> {item.quantidade} </span>
            <button onClick={() => aumentarQuantidade(item.id)}>+</button>
          </div>

            <button onClick={() => removerItem(item.id)}>Remover</button>
          </div>
        ))}
      </div>
    </section>
  );
}