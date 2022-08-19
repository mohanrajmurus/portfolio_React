import React from 'react';
import '../css/About.css'
import aboutimg from '../images/about.png';

export default function ContentAbout() {
  return (
    <div className='container'>
        <section className='main-content'>
            <div className='left'>
                <h3>Know Who <span>I'M</span></h3>
                <p>Hi, I'm <span>Mohanraj Murugesan</span>, <span>Frontend Developer</span> based at Chennai. I enjoy solving complex projects within timeline and stay hungry in updating my skills. 
                </p>
                <p>I am a passionate person who pursues his dreams, who works hard and who is results oriented. As a matter of fact, I constantly work on improving myself seeking to achieve the best version of myself.</p>
            </div>
            <div className='right'>
                <img src={aboutimg} alt='about-info'/>
            </div>
        </section>
        
    </div>
  )
}
