import React from 'react';
import { 
    DiLinux,
    DiVisualstudio,
    DiFirefox,
 } from "react-icons/di";

 import { SiPostman } from "react-icons/si";

export default function Toolset() {
  return (
    <div className='container'>
        <section className='tool-set'>
            <h1><span>Tools</span> I use</h1>
            <ul className='tools'>
                <li className='tool'>{<DiLinux size={70}/>}</li>
                <li className='tool'>{<DiVisualstudio size={70}/>}</li>
                <li className='tool'>{<DiFirefox size={70}/>}</li>
                <li className='tool'>{<SiPostman size={70}/>}</li>
            </ul>
        </section>
    </div>
  )
}
