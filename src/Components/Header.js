import React from 'react'
import Headerimage from '../images/home-main.svg'
import Jobrole from './Jobrole';
import '../css/Header.css'

export default function (props) {
  /* const role = props.jobRole;
  const traverse = (role) => {
    for (let i = 0; i < role.length; i++) {
      const ele = role[i];
      return ele;
    }
  } */

  
 
  return (
    <div className='container'>
        <div className='header'>
            <div className='intro'>
                <p className='welcome'>Hi There!<span className='hand-wave'>👋</span></p>
                <h1 className='name'>I'M <span>{props.name}</span></h1>
                <div className='role' ><Jobrole/></div>
            </div>
            <div className='main-image'>
                <img src={Headerimage} alt='header'/>
            </div>
        </div>
    </div>
  )
}
