import { useParams } from "react-router";
import { produtos } from "../../data/produtos.js";
import { useCarrinho } from "../../context/CarrinhoContext.jsx";
import styles from "./Produto.module.css";

function Produto() {

    const { adicionarItem } = useCarrinho();
    const { id } = useParams();

    const pr = produtos.find((p) => p.id === Number(id));

    if (!pr) {
        return (
            <p>Opa! Esse produto parece inexistente ou foi removido.</p>
        )
    }
    return (
        <section>
            <div className={styles.produto}>
                <img className={styles.imagem} src={pr.img} alt={pr.nome} />
                <div className={styles.info}>
                    <h2 className={styles.nome}>{pr.nome}</h2>
                    <p>{pr.descricao}</p>
                    <p className={styles.preco}>R$ {pr.preco.toFixed(2)}</p>
                    {pr.em_estoque ?
                        <button onClick={() => adicionarItem(pr)}>Adicionar ao Carrinho</button>
                        :
                        <p className={styles.indisponivel}>Produto indisponível</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default Produto;
