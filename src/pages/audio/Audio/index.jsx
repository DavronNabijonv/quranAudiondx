import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Parts from '../../../components/parts';
import {GrFormPreviousLink} from 'react-icons/gr'

export default function Audio() {

    const [my, setMy] = useState([])
    const [bool, setBool] = useState(false)
    const [tag, setTag ] = useState(<div></div>)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);


    const getInfo = async () =>{
        try{
           const myArray = [];
           const { data } =  await axios('http://api.alquran.cloud/v1/quran/ar.alafasy');
           const inf = data.data.surahs;
           for(let i of inf){
            const infor = {
                number: `${i.number}`,
                englishName: `${i.englishName}`,
                name: `${i.name}`,
                revelationType: `${i.revelationType}` === "Meccan" ? "Makkada nozil bo`lgan" :  "Madinada nozil bo`lgan",
                ayahs: []
            }
            for (const s of i.ayahs){
                const oyt = {
                    audio: s.audio,
                    text: s.text,
                    sajda: s.sajda ? 'sajda oyati bor' : 'sajda oyati yo`q'
                }
                infor.ayahs.push(oyt);
            }
            myArray.push(infor)
            setMy(myArray)
           }
           console.log(my)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
         getInfo();
         const handleResize = () => {
          setInnerWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    } , [])

    const getAudio = (value) => {
        const AyahsArray =
          my[value].ayahs.map((r) => (
            <div className={styles.prt2}>
              <p className={styles.sajdap}>{r.sajda}</p>
              <audio controls>
                  <source src={r.audio} />
              </audio>
              <p className={styles.textp}>{r.text}</p>
            </div>
        ))
        

        const Parts =
            <div className={styles.prt1}>
              <button onClick={()=>{setBool((prevBool) => !prevBool)}}><GrFormPreviousLink/></button>
              <p>{my[value].number}: {my[value].englishName} ({my[value].name})</p>
              <p>Oyatlar: {my[value].ayahs.length}</p>
            </div>
        
        const nm = (<>
          {Parts}
          <div className={styles.forstyle}>{AyahsArray}</div>
        </>)
        setTag(nm);
        setBool((prevBool) => !prevBool);
      };
    

      return (
        <div className={styles.section}>
          <div className={!bool ? styles.firstpart : styles.close}>
            {my.map((r, index) => (
            <button key={r.number} onClick={() => getAudio(index)}>
              <p>{r.number}: {r.englishName} ({r.name})</p>
              <p>Oyatlar: {r.ayahs.length}</p>
            </button>
          ))}
          </div>
          <div className={innerWidth > 768 && styles.secondpart}>{bool ? <div className={styles.audioContent}>{tag}</div> : <div style={{paddingTop:'40%'}}> <Parts/></div>}</div>
        </div>
      );     
}
