import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Fade } from 'react-reveal';

import {BsTelephoneOutboundFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai';
import {MdHomeRepairService} from 'react-icons/md';
import {GrMail} from 'react-icons/gr'

import styles from '../styles/header.module.css';


export function Header() {

    const [ isOpen, setIsOpen] = useState(false)

    return (
        <section className={`${styles.header}`}> 
            <Fade top>
                <div className={styles.headerContainer}>
                    <Link to='/'><h1 className={styles.title}>Llantera Mazatlan</h1></Link>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a href='#home'><AiFillHome size={23} className={styles.icon} /> Inicio</a></li>
                        <li className={styles.listItem}><a href='#services'> <MdHomeRepairService size={23} className={styles.icon} /> Servicios</a></li>
                        <li className={styles.listItem}><a href='#contact'><GrMail size={23} className={styles.icon} />Contacto</a></li>
                    </ul>
                    <p className={styles.phoneNumber}><BsTelephoneOutboundFill className={styles.phoneIcon} /> 669 123 5660</p>
                    <ul className={`${styles.listResponsive} ${isOpen && styles.activelistResponsive}`}>
                        <li className={styles.listItem}><a href='#home'><AiFillHome size={23} className={styles.icon} /> Inicio</a></li>
                        <li className={styles.listItem}><a href='#services'> <MdHomeRepairService size={23} className={styles.icon} /> Servicios</a></li>
                        <li className={styles.listItem}><a href='#contact'><GrMail size={23} className={styles.icon} />Contacto</a></li>
                        <li className={`${styles.phoneNumber} ${styles.listItem}`}><BsTelephoneOutboundFill className={styles.phoneIcon} /> 669 123 5660</li>
                    </ul>

                    <div className={styles.barsMenu} onClick={() =>  setIsOpen(!isOpen)}>
                        <span className={`${styles.line1__barsMenu} ${isOpen && styles.activeline1__barsMenu}`}></span>
                        <span className={`${styles.line2__barsMenu} ${isOpen && styles.activeline2__barsMenu}`}></span>
                        <span className={`${styles.line3__barsMenu} ${isOpen && styles.activeline3__barsMenu}`}></span>
                    </div>
                </div>
            </Fade>       
        </section>
    )
}