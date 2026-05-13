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
            <Card
              key={produto.id}
              title={produto.nome}
              price={produto.preco}
              desc={produto.em_estoque}
              img={produto.img}
            />
            <Link to={`/Catalogo/${produto.id}`}>Ver detalhes</Link>
          </>
        ))}
      </div>
    </>
  );
}

export default ConteudoPrincipal;
