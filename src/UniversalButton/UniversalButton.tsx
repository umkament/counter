import React from 'react'
import style from './UniversalButton.module.css'


export type UniverselButtonPropsType = {
  text: string
  disabled?: boolean
  callback: () => void
}

export const UniverselButton: React.FC<UniverselButtonPropsType> = (props) => {

  return <div>
    <button className={style.button}
       disabled={props.disabled}
            onClick={props.callback}
    >{props.text}
    </button>
  </div>
}