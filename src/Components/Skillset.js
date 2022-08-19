import React from 'react';
import{
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiNpm,
    DiGit
} from "react-icons/di";
import{SiCplusplus} from "react-icons/si";

export default function Skillset() {
  return (
    <div className='container'>
        <section className='skill-set'>
            <h1>Professional <span>Skillset </span> </h1>
            <ul className='skills'>
                <li>{<DiHtml5 size={70}/>}</li>            
                <li>{<DiCss3 size={70}/>}</li>            
                <li>{<DiJavascript1 size={70}/>}</li>            
                <li>{<DiReact size={70}/>}</li>            
                <li>{<DiNodejs size={70}/>}</li>            
                <li>{<DiNpm size={70}/>}</li>            
                <li>{<DiGit size={70}/>}</li>            
                <li>{<SiCplusplus size={70}/>}</li>            
            </ul>
        </section>
    </div>
  )
}
