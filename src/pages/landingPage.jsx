import styles from '../styles/landingPage.module.css';

import imgBanner from '../assets/images/autoBanner2.jpg';
import imgAbout from '../assets/images/auto.jpg';

import {BsFillMouseFill} from 'react-icons/bs';
import {HiArrowLongDown} from 'react-icons/hi2';
import {BsTelephoneOutboundFill} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io';
import {FaRegCalendarAlt} from 'react-icons/fa';
import { Fade } from 'react-reveal';
 
export function LandingPage() {
    return (
        <section className={styles.landingPage}>

            <div className={styles.banner} id='home'>
                <Fade>
                    <div className={styles.imgContainer}>
                        <img src={imgBanner} className={styles.img} alt="" />
                    </div>
                </Fade>
                <div className={styles.presentation}>
                    <Fade bottom>
                        <div className={styles.presentationText}>
                            <h2 className={styles.title}>Llantera Mazatlan</h2> 
                            <a href="#contact">
                                <button className={styles.button}>
                                    <BsTelephoneOutboundFill className={styles.phone} size={23} />
                                    Llama Ahora
                                </button>
                            </a>
                        </div>
                        <div className={styles.scroll}>
                            <BsFillMouseFill size={23} />
                            <HiArrowLongDown className={styles.arrow} size={23} />
                        </div>
                    </Fade>
                </div>
            </div>

            <Fade right>
                <ul className={styles.bottomList}>
                    <li className={styles.bottomListItem}><BsTelephoneOutboundFill size={23} /></li>
                    <li className={styles.bottomListItem}><IoLogoWhatsapp size={23} /></li>
                    <li className={styles.bottomListItem}><FaRegCalendarAlt size={23} /></li>
                </ul>
            </Fade>

            <section className={`${styles.about} ${styles.sectionContainer} container`}>
                <Fade left>
                    <div className={styles.aboutContainerImg}>
                        <img src={imgAbout} className={`${styles.img} ${styles.imgAbout}`} alt="" />
                    </div>
                </Fade>
                <div className={styles.aboutDescription}>
                    <Fade bottom>
                        <h3 className={styles.subtitle}>Llantera Garcia en Mazatlan Sinaloa contamos con tecnicos de Calidad</h3>
                        <p className={styles.paragrath}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt impedit, adipisci tempora deserunt maxime, aliquid temporibus amet fugit, eaque numquam. Tenetur reprehenderit aliquid inventore molestiae unde, mollitia velit quasi?</p>
                        <p className={styles.paragrath}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt impedit, adipisci tempora deserunt maxime, aliquid temporibus amet fugit, eaque numquam. Tenetur reprehenderit aliquid inventore molestiae unde, mollitia velit quasi?</p>
                        <p className={styles.paragrath}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sunt impedit, adipisci tempora deserunt maxime, aliquid temporibus amet fugit, eaque numquam. Tenetur reprehenderit aliquid inventore molestiae unde, mollitia velit quasi?</p>
                    </Fade>
                </div>
            </section>

        </section>
    );
}