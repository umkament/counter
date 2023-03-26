import React, {useEffect, useState} from 'react';
import style from './Display.module.css'
import {UniverselButton} from "../UniversalButton/UniversalButton";

export type DisplayPropsType = {

}

export const Display: React.FC<DisplayPropsType> = (props) => {
  let [value, setValue] = useState<number>(0)
  let maxValue = 5

  const countIncrement = () => setValue(value + 1)
  const countReset = () => setValue(0)

    return <>
       <div className={style.display}>
      <span  className={value===maxValue ? style.maxValue : ''}>{value}</span>
    </div>
  <div className={style.buttons}>
    <UniverselButton text={'inc'} disabled={value===5} callback={countIncrement}/>
    <UniverselButton text={'reset'} disabled={value===0} callback={countReset}/>
  </div>
    </>
  }





