import React, {useEffect, useState} from 'react';
import style from './Display.module.css'

export type DisplayPropsType = {
  value: number
  maxValue: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {

    return <div>
      <span  className={props.value===props.maxValue ? style.maxValue : ''}>{props.value}</span>
    </div>

  }





