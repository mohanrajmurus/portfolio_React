import React from 'react'
import SocialLinks from './SocialLinks';
import '../css/Findme.css'

export default function () {
  return (
    <div className='container social-media-links'>
        <h1>FIND ME ON</h1>
        <p>Feel free to <span>connect</span> with me</p>    
        <SocialLinks 
        git='https://github.com/mohanrajmurus'
        linkedIn='#'
        twitter='#'
        instagram='#' />        
    </div>
  )
}
