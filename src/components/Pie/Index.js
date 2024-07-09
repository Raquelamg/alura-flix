import styles from './Pie.module.css'
import logo from "./LogoMain.png"
function Pie() {
    return (
        <footer className={styles.rodape}>
                <img className={styles.logoAlura }   src={logo} alt="Logo Aluraflix"/>
        </footer>
    )
}

export default Pie;
