import React from 'react'
import Avator from '../images/avatar.svg'
import '../css/Main.css'


export default function () {
  return (
    <div className='container'>
        <div className='self-intro-message'>
          <div className='left'>
            <h1 >LET ME <span>INTRODUCE</span> MYSELF</h1>
            <div>
                <p className='self-intro'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                <p className='self-intro'>I am fluent in <span>HTML,CSS,JavaScript and React JS</span>.</p>
                <p className='self-intro'>My field of Interest's are building new  <span>Web Technologies and Products</span>.</p>
                <p className='self-intro'>Whenever possible, I also apply my passion for developing products with <span>Node.js</span> and <span>Modern JavaScript Library and Frameworks</span>  like <span>React.js</span></p>
            </div>
          </div>
          <div className='avatar'>
            <img src={Avator} alt='avatar'/>
          </div>
        </div>
    </div>
  )
}
