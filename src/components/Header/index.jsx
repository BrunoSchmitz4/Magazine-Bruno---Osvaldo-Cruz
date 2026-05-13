import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
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
                </nav>
            </div>
        </header>
    </>
}