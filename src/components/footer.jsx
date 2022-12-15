import styles from '../styles/footer.module.css';

import visa from '../assets/images/visa.png';
import discover from '../assets/images/discover.png';
import american from '../assets/images/american-express.png';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>
                <Fade bottom>
                    <div className={styles.footerList}>
                        <p className={styles.footerSubmenu}>Llantera Garcia</p>
                        <ul className={`${styles.footerList} ${styles.icons}`}>
                            <li><a href='facebook'><AiFillFacebook size={22}/></a></li>
                            <li><a href='instagram'><AiFillInstagram size={22}/></a></li>
                            <li><a href='tiktok'><FaTiktok size={22}/></a></li>
                        </ul>
                    </div>
                    <div className={styles.footerList}>
                        <p className={styles.footerSubmenu}>Menu</p>
                        <ul className={styles.footerList}>
                            <Fade bottom>
                                <li className={styles.footerListItem}><Link to='/'>Inicio</Link></li>
                                <li className={styles.footerListItem}><Link href='/'>Servicios</Link></li>
                                <li className={styles.footerListItem}><Link href='/'>Contacto</Link></li>
                            </Fade>
                        </ul>
                    </div>
                    <div className={styles.footerList}>
                        <p className={styles.footerSubmenu}>Pagos</p>
                        <ul className={`${styles.footerList} ${styles.payments}`}>
                            <Fade bottom>
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}><img src={visa} alt="visa" /></li>
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}><img src={discover} alt="discover" /></li>
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}><img src={american} alt='american express' /></li>
                            </Fade>
                        </ul>
                    </div>
                    <div className={styles.footerList}>
                        <p className={styles.footerSubmenu}>Terminos</p>
                        <ul className={styles.footerList}>
                            <Fade bottom>
                                <li className={styles.footerListItem}><Link to='/terms'>Condiciones</Link> </li>
                                <li className={styles.footerListItem}><Link to='/privacy'>Privacidad</Link> </li>
                                <li className={styles.footerListItem}><Link to='/refund'>Devoluciones</Link> </li>
                            </Fade>
                        </ul>
                    </div> 
                </Fade>
            </div>
            <Fade bottom>
                <p className={styles.copy}>&copy; Llantera Garcia</p> 
            </Fade>
        </footer>
    )
}