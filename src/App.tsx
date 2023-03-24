import React, {useState} from 'react';
import style from './App.module.css';
import {Display} from "./Display";


export const App = () => {
  let [value, setValue] = useState<number>(0)
  let maxValue = 5

  const countIncrement = () => setValue(value + 1)
  const countReset = () => setValue(0)

    return (
       <div className={style.main}>
         <div className={style.display}>
           <Display value={value}
                    maxValue={maxValue}
           />
         </div>
         <div className={style.buttons}>
           <button className={style.button} onClick={countIncrement}
                  disabled={value===5}
           >inc</button>
           <button className={style.button} onClick={countReset}
                   disabled={value===0}
           >reset</button>
         </div>
       </div>
    );

}
