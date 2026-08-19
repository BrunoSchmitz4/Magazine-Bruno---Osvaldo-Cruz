import { useCarrinho } from "../../context/CarrinhoContext"
import style from "./Pedidos.module.css"

export default function Pedidos() {

    const { pedidos } = useCarrinho()

    if (pedidos.length === 0) return ( <p>Você não tem pedidos ainda. Peça um!</p>)

    return (

        <section>
            <h2>Página de Pedidos</h2>
            {pedidos.map((pedido) => (
                <div key={pedido.id} className={style.pedido}>
                    <div className={style.cabecalho}>
                        <strong>Pedido de {pedido.data}</strong>
                        <span className={style.total}>
                            Total: R$ {pedido.total.toFixed(2)}
                        </span>
                    </div>

                    <ul className={style.lista}>
                        {pedido.itens.map((item) => (
                            <li key={item.id}>
                                {item.nome} - {item.quantidade}x - R${" "}
                                {(item.preco * item.quantidade).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}