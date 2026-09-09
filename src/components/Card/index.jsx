import style from './Card.module.css';
import { formatarPreco } from '../../utils/formatarPreco';

// Props são propriedades que passamos para alimentar um componente
function Card({ title, desc, price, img }) {
    return (
        <div className={style.card}>
            <img className={style.img} src={img} alt={title} />
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{desc}</p>
            <p className={style.price}>{formatarPreco(price)}</p>
        </div>
    );
}

export default Card;
