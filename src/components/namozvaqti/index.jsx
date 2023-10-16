import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './index.module.scss'


export  function NamozVaqtlari(){

    const [reg, setReg] = useState('Tashkent')
    const [state, setState]=useState(
        {
            bomdod:'',
            peshin:'',
            asr:'',
            shom:'',
            xufton:''
        }
    )

    const firstRequest= async()=>{
        try{
            await axios(`https://islomapi.uz/api/present/day?region=Toshkent`)
            .then((resp) => {
                console.log(resp.data.times)
                setState({
                    bomdod: resp.data.times.tong_saharlik,
                    peshin: resp.data.times.peshin,
                    asr: resp.data.times.asr,
                    shom: resp.data.times.shom_iftor,
                    xufton: resp.data.times.hufton
                    });
            })
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        
        firstRequest();
    } , [])


    return(
        <>
            <h3 className={styles.head}>Namoz Vatlari</h3>
            <div className={styles.api}>
                <div>
                    <div className={styles.vaqt}>Bomdod: {`${state.bomdod}`}</div>
                    <div className={styles.vaqt}>Peshin: {`${state.peshin}`}</div>
                    <div className={styles.vaqt}>Asr: {`${state.asr}`}</div>
                </div>
                <div>
                    <div className={styles.vaqt}>Shom: {`${state.shom}`}</div>
                    <div className={styles.vaqt}>Xufton: {`${state.xufton}`}</div>
                </div>
            </div>
        </>
    )
}
