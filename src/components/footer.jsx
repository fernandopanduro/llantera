import styles from '../styles/footer.module.css';

import visa from '../assets/images/visa.png';
import visaAvif from '../assets/images/visa.avif';
import visaWebp from '../assets/images/visa.webp';

import money from '../assets/images/money.png';
import moneyAvif from '../assets/images/money.avif';
import moneyWebp from '../assets/images/money.webp';

import master from '../assets/images/master-card.png';
import masterAvif from '../assets/images/master-card.avif';
import masterWebp from '../assets/images/master-card.webp';

import american from '../assets/images/american-express.png';
import americanAvif from '../assets/images/american-express.avif';
import americanWebp from '../assets/images/american-express.webp';


import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import {AiFillFacebook} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';
import {HiMapPin} from 'react-icons/hi2'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>
                <Fade bottom>
                    <div className={styles.footerList}>
                        <p className={styles.footerSubmenu}>Llantera Garcia</p>
                        <ul className={`${styles.footerList} ${styles.icons}`}>
                            <li><a target='_blank' href='https://www.facebook.com/LlanteraMovilLlanteraGarciaLlanteraMazatlan'><AiFillFacebook size={22}/></a></li>
                            <li><a target='_blank' href='https://g.page/r/CTQJmWPaLLkdEBE/review'><HiMapPin size={22}/></a></li>
                            <li><a target='_blank' href='https://www.tiktok.com/@llanteragarciamazatlan'><FaTiktok size={22}/></a></li>
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
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}>
                                    <picture>
                                        <source srcSet={visaAvif} type='image/avif'/>
                                        <source srcSet={visaWebp} type='image/webp'/>
                                        <img src={visa} alt="visa" loading='lazy' />
                                    </picture>

                                </li>
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}>
                                    <picture>
                                        <source srcSet={masterAvif} type='image/avif'/>
                                        <source srcSet={masterWebp} type='image/webp'/>
                                        <img src={master} alt="master card" loading='lazy' />
                                    </picture>

                                </li>
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}>
                                    <picture>
                                        <source srcSet={americanAvif} type='image/avif'/>
                                        <source srcSet={americanWebp} type='image/webp'/>
                                        <img src={american} alt='american express' loading='lazy' />
                                    </picture>

                                </li>
                                <li className={`${styles.footerListItem} ${styles.paymentImg}`}>
                                    <picture>
                                        <source srcSet={moneyAvif} type='image/avif'/>
                                        <source srcSet={moneyWebp} type='image/webp'/>
                                        <img src={money} alt="money" loading='lazy' />
                                    </picture>

                                </li>
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