import React from 'react'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'

const myArray = [
    "«Nabiy sollallohu alayhi vasallam: «Kim Allohning Kitobidan bir harf o‘qisa, unga buning uchun bir savob bo‘lur. Har bir savob esa o‘n misli(ga ko‘paytirilur). «Alif. Laam. Miym – bir harf» demayman. Balki «Alif» bir harf, «Laam» bir harf, «Miym» bir harf», dedilar».",
    "«Nabiy sollallohu alayhi vasallam: «Alloh taolo «Kimni Qur’on va Mening zikrim Mendan (narsalarni) so‘rashdan to‘sgan bo‘lsa, unga so‘rovchilarga bergan narsamdan afzalini berurman. Allohning kalomining boshqa kalomlardan afzalligi xuddi Allohning O‘z maxluqotlaridan afzalligiga o‘xshaydir», deydi», dedilar».",
    "«Alloh taolo kimni Qur’on va Mening zikrim Mendan (narsalarni) so‘rashdan to‘sgan bo‘lsa, unga so‘rovchilarga bergan narsamdan afzalini berurman»",
    "«Allohning kalomining boshqa kalomlardan afzalligi xuddi Allohning O‘z maxluqotlaridan afzalligiga o‘xshaydir»."
]



export default function Parts() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % myArray.length);
        }, 4000);

        return () => {
        clearInterval(interval);
        };
    }, []);

  return (
        <div className={styles.first}>
            <p>{myArray[currentIndex]}</p>
        </div>
  )
}
