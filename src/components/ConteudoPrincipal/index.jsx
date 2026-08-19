import style from "./ConteudoPrincipal.module.css";
import Card from "../Card";
import { produtos } from "../../data/produtos";
import { Link } from "react-router-dom";

function ConteudoPrincipal() {

  const lista_produtos = produtos;
  return (
    <>
      <div className={style.container}>
        {lista_produtos.map((produto) => (
          <>
            <Link className={style.cardLink} to={`/Catalogo/${produto.id}`}>
              <Card
                key={produto.id}
                title={produto.nome}
                price={produto.preco}
                desc={produto.descricao}
                img={produto.img}
              />
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default ConteudoPrincipal;
