import styles from '../styles/landingPage.module.css';

import imgBanner from '../assets/images/autoBanner2.jpg';
import imgAbout from '../assets/images/montado-de-llantas.jpg';

import {BsFillMouseFill} from 'react-icons/bs';
import {HiArrowLongDown} from 'react-icons/hi2';
import {BsTelephoneOutboundFill} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io';
import {FaRegCalendarAlt, FaMapMarkerAlt} from 'react-icons/fa';
import {GiFlatTire} from 'react-icons/gi';

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
                    <li className={styles.bottomListItem}><a target='_blank' href='tel:6691235660'><BsTelephoneOutboundFill size={23} /></a></li>
                    <li className={styles.bottomListItem}><a target='_blank' href='https://api.whatsapp.com/send/?phone=523122702315&text&type=phone_number&app_absent=0'><IoLogoWhatsapp size={23} /></a></li>
                    <li className={styles.bottomListItem}><a href='#contact'><FaRegCalendarAlt size={23} /></a></li>
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
                        <p className={styles.paragrath}>Llantera Garcia en Mazatlán. Ofrecemos el servicio de llantería móvil a domicilio para mayor comodidad de nuestros clientes. Si necesitas cambiar tus llantas o simplemente necesitas un reemplazo</p>
                        <p className={styles.paragrath}>Nuestro personal está capacitado y utilizamos las mejores herramientas y equipos para asegurarnos de que nuestros trabajos se realicen de manera rápida y eficiente. Ofrecemos servicios de alta calidad a nuestros clientes, y contamos con una amplia gama de llantas nuevas y llantas usadas para todo tipo de vehículos, desde automóviles hasta camionetas</p>
                        <p className={styles.paragrath}>¡visítanos en Llantera Garcia! Estamos seguros de que encontrarás lo que buscas y te ofreceremos un excelente servicio.</p>
                    </Fade>
                </div>
            </section>

            <section className={`${styles.form}`} id='contact'>
                <div  className='container'>
                    <Fade top>
                        <h3>Contacta a la Mejor Llantera de Mazatlan Sinaloa</h3>
                    </Fade>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactDireccions}>
                            <div className={styles.contactDireccion}>
                                <h4><FaMapMarkerAlt /> Direccion</h4>
                                <p>Av. Juan Pablo II 1616, Jaripillo, 82136 Mazatlán, Sin.</p>
                            </div>
                            <div className={styles.contactDireccion}>
                                <h4><FaRegCalendarAlt /> Horario</h4>
                                <p>Lun. - Vie. 8:00 a 20:00 </p>
                                <p>Sab. 8:00 a 18:00</p>
                                <p>Dom. Cerrado</p>
                            </div>
                            <div className={styles.contactDireccion}>
                                <h4><BsTelephoneOutboundFill /> Telefono</h4>
                                <p>669 123 5660</p>
                            </div>
                            <p><GiFlatTire size={125} /></p>
                        </div>
                        <form action="" className={`${styles.formContact}`}>
                            <Fade bottom>
                                <input className={styles.input} type="text" placeholder='Nombre' />
                                <input className={styles.input} type="tel" name="" id="" placeholder='Telefono'/>
                                <input className={styles.input} type="email" placeholder='Email'/>
                                <textarea className={styles.input} name="" id="" cols="30" rows="10" placeholder='Mensage'></textarea>
                            </Fade>
                        </form>
                    </div>
                </div>
            </section>

            <Fade bottom>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7331.078985288881!2d-106.394492!3d23.259839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1db92cda63990934!2z8J-boO-4jyBMbGFudGVyYSBNb3ZpbCB8IExsYW50ZXJhIEdhcmPDrWEgfCBMbGFudGVyYSBNYXphdGxhbiDwn5ug77iP!5e0!3m2!1ses-419!2smx!4v1671040916129!5m2!1ses-419!2smx" loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade" allowfullscreen="" className={styles.googleMaps}></iframe>
            </Fade>


        </section>
    );
}