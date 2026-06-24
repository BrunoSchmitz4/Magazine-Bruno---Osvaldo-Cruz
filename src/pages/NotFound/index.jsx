import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

function NotFound() {
    return (
        <section className={styles.notFound}>
            <h2>Opa! Página não encontrada. 😯</h2>
            <p>Vamos te ajudar à voltar à terras firmes!</p>
            <Link to="/" className={styles.link}>Voltar para a Home</Link>
        </section>
    )
}

export default NotFound;