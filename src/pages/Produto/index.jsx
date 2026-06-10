import { useParams } from "react-router";
import { produtos } from "../../data/produtos.js";
import { useCarrinho } from "../../context/CarrinhoContext.js";

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
            <h2>{pr.nome}</h2>
            <p>{pr.descricao}</p>
            <p>Preço: R$ {pr.preco.toFixed(2)}</p>
            <img src={pr.img} alt={pr.nome} />
            {pr.em_estoque ? 
                <> <button onClick={() => adicionarItem(pr)}>Adicionar ao Carrinho</button> </>
                :
                <> <p>Produto indisponível</p> </>
            }
        </section>
    )
}

export default Produto;