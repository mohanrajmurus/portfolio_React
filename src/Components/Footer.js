import React from 'react';
import SocialLinks from './SocialLinks';
import '../css/Footer.css'

export default function Footer() {
  return (
    <div className='container footer'>
        <p>Designed and Developed by Mohan</p>
        <p>Copyright © 2022 MR</p>
        <SocialLinks 
        git='https://github.com/mohanrajmurus'
        linkedIn='#'
        twitter='#'
        instagram='#' />  
    </div>
  )
}
