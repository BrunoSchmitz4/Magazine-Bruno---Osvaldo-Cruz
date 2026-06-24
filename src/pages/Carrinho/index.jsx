import { useCarrinho } from "../../context/CarrinhoContext";
import styles from "./Carrinho.module.css";

export default function Carrinho() {
  const { itens, removerItem, aumentarQuantidade, diminuirQuantidade, valorTotal, finalizarCompra } = useCarrinho();

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
          <div key={item.id} className={styles.itemCarrinho}>
            <div className={styles.info}>
              <strong>{item.nome}</strong>
              <span className={styles.preco}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </span>
            </div>

            <div className={styles.quantidade}>
              <button
                className={styles.botaoQtd}
                onClick={() => diminuirQuantidade(item.id)}
              >
                -
              </button>
              <span>{item.quantidade}</span>
              <button
                className={styles.botaoQtd}
                onClick={() => aumentarQuantidade(item.id)}
              >
                +
              </button>
            </div>

            <button
              className={styles.botaoRemover}
              onClick={() => removerItem(item.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <div className={styles.resumo}>
        <span className={styles.total}>
          Total: R$ {valorTotal().toFixed(2)}
        </span>
        <button className={styles.finalizar} onClick={finalizarCompra}>
          Finalizar Compra
        </button>
      </div>
    </section>
  );
}