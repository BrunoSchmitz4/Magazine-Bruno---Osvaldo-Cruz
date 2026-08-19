import { useState } from "react";
import { produtos } from "../../data/produtos";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import style from "../../components/ConteudoPrincipal/ConteudoPrincipal.module.css";

function CatalogoProdutos() {
    const [busca, setBusca] = useState("");

    const filtrados = produtos.filter((p) =>
        p.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section>
            <h2>Esse é o catálogo de produtos</h2>

            <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar produto..."
            />
            
            <div className={style.container}>
                {filtrados.map((p) => (
                    <Link key={p.id} className={style.cardLink} to={`/Catalogo/${p.id}`}>
                        <Card
                            title={p.nome}
                            price={p.preco}
                            desc={p.descricao}
                            img={p.img}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CatalogoProdutos;
