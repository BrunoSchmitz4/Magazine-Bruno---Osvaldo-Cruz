import style from './Card.module.css';

function Card({ title, desc, price, img }) {
    return <>
        <div className={style.card}>
            <img className={style.img} src={img} alt={title} />
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{desc}</p>
            <p className={style.price}>R$ {price.toFixed(2).replace('.', ',')}</p>
        </div>
    </>
}

export default Card;