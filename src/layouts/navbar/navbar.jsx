import React, { useEffect, useState } from "react";
import styles from './navbar-style.module.scss';
import {  Link } from "react-router-dom";
import { HiMenuAlt2 } from 'react-icons/hi';
import { NamozVaqtlari } from "../../components/namozvaqti";

export function Navbar () {
    const [bool, setBool] = useState(false)
    
    const toggleMenuOpen=()=>{
        setBool(!bool)
    }

    const [open, setOpen] = useState(false)

    const openVaqt = ()=>{
        setOpen(!open)
    }

    return(
        <>
            <nav className={bool ? styles.open : {justifyContent: 'center'}}>
                <div className={styles.navbarOverlay} onClick={toggleMenuOpen}></div>
                <button className={styles.button} onClick={toggleMenuOpen}><HiMenuAlt2 /></button>
                <div className={styles.container} >
                    <Link to='/'>Quran Audio </Link>
                    <button onClick={openVaqt}>Namoz Vaqtlari</button>
                </div>
            </nav>
            {open ? <div className={styles.namoz}><NamozVaqtlari/></div> : ''}
        </>
    )
}