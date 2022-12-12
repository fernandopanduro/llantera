import styles from '../styles/landingPage.module.css';
import imgBanner from '../assets/images/autoBanner2.jpg';

import {BsFillMouseFill} from 'react-icons/bs';
import {HiArrowLongDown} from 'react-icons/hi2';
import {BsTelephoneOutboundFill} from 'react-icons/bs'
 
export function LandingPage() {
    return (
        <section className={styles.landingPage}>

            <div className={styles.banner} id='home'>
                <div className={styles.imgContainer}>
                    <img src={imgBanner} className={styles.img} alt="" />
                </div>
                <div className={styles.presentation}>
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
                </div>
            </div>

            

        </section>
    );
}