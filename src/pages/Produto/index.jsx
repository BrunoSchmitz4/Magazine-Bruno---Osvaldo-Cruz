import { useParams } from "react-router";

function Produto() {
    const { id } = useParams();

    return (
        <>
            <h2>
                Descrição do produto de id:
                {id}
            </h2>
        </>
    )
}

export default Produto;