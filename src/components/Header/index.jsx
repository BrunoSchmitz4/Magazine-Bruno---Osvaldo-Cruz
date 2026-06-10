import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useCarrinho } from '../../context/CarrinhoContext';


export default function Header() {
    const { totalItens } = useCarrinho();

    return <>
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <h2>Magazine Bruninho</h2>
                <p>Tudo de A à Z</p>
            </div>
            <div className={styles.headerBox}>
                <nav className={styles.headerNav}>
                    <Link className={styles.HeaderLink} to="/">Home</Link>
                    <Link className={styles.HeaderLink} to="/Catalogo">Catálogo</Link>
                    <Link className={styles.HeaderLink} to="/Carrinho">Carrinho ({totalItens()})</Link>
                </nav>
            </div>
        </header>
    </>
}