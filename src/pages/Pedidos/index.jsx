import { useCarrinho } from "../../context/CarrinhoContext";
import styles from "./Pedidos.module.css";

export default function Pedidos() {
  const { pedidos } = useCarrinho();

  if (pedidos.length === 0) {
    return (
      <section>
        <p>Você ainda não fez nenhum pedido.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Meus Pedidos</h2>

      {pedidos.map((pedido) => (
        <div key={pedido.id} className={styles.pedido}>
          <div className={styles.cabecalho}>
            <strong>Pedido de {pedido.data}</strong>
            <span className={styles.total}>
              Total: R$ {pedido.total.toFixed(2)}
            </span>
          </div>

          <ul className={styles.lista}>
            {pedido.itens.map((item) => (
              <li key={item.id}>
                {item.nome} — {item.quantidade}x — R${" "}
                {(item.preco * item.quantidade).toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
