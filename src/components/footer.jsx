import styles from '../styles/footer.module.css';

import visa from '../assets/images/visa.png';
import discover from '../assets/images/discover.png';
import american from '../assets/images/american-express.png';

import Fade from 'react-reveal/Fade';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>
                <Fade bottom>
                    <ul className={styles.list}>
                        <li className={`${styles.listItem} ${styles.listItemMenu}`}>Servicios</li>
                        <li className={`${styles.listItem} ${styles.listItemMenu}`}>Inicio</li>
                        <li className={`${styles.listItem} ${styles.listItemMenu}`}>Contacto</li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><img src={visa} alt="" /></li>
                        <li className={styles.listItem}><img src={discover} alt="" /></li>
                        <li className={styles.listItem}><img src={american} alt="" /></li>
                    </ul>
                    <p>Llantera Garcia</p>
                </Fade>
            </div>
        </footer>
    )
}