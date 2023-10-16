import { Navbar } from "../../layouts/navbar/navbar"
import styles from './boshsahifa.module.scss'
import Audio from "./Audio"

// bosh sahifada ko`rinuvchi qism
export function BoshSahifa(){
    return (
        <>
            <Navbar />
            <div className={styles.namvaqt}>
                <Audio />
            </div>   
        </>
    )
}