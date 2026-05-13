import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

function NotFound() {
    return (
        <>
            <h2>Opa! Página não encontrada. 😯</h2>
            <p>Vamos te ajudar à voltar à terras firmes!</p>
            <Link to="/" className={styles.link}>Voltar para a Home</Link>
        </>
    )
}

export default NotFound;