import React, {ChangeEvent, useState} from 'react'
import style from './DisplaySettings.module.css'
import {UniverselButton} from "../UniversalButton/UniversalButton";


export type DisplaySettingsPropsType = {

}

export const DisplaySettings: React.FC<DisplaySettingsPropsType> = (props) => {
let [maxValue, setMaxValue] = useState('')
let [strtValue, setStartValue] = useState('')

  const maxValueOfInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }

  const setAllValues = () => {
    setMaxValue(maxValue)
    setStartValue(strtValue)
  }

  return <>
  <div>
    <div className={style.smallBlock}>
      <span>max value:</span>
      <input className={style.input}
             onChange={maxValueOfInput}
      />
    </div>
    <div className={style.smallBlock}>
      <span>start value:</span>
      <input className={style.input}/>
    </div>
    <div className={style.button}>
      <UniverselButton text={'settings'} callback={setAllValues}/>
    </div>
  </div>
  </>
}