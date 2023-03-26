import React, {useState} from 'react';
import style from './App.module.css';
import {Display} from "./Display/Display";
import {DisplaySettings} from './DisplaySettings/DisplaySettings';


export const App = () => {


  return <div className={style.own}>
    <div className={style.main}>
      <DisplaySettings/>
    </div>
    <div className={style.main}>
      <Display/>
    </div>
  </div>

}
