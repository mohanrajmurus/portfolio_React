import React from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const handleClickOpen = () => {
    //e.target.classList.toggle('hidden')
    //document.getElementById('close').classList.remove('hidden')
    const menu = document.getElementById('nav-mobile');
    menu.classList.toggle('hidden');
    //console.log(menu.classList);
  }
 /*  const handleClickClose = (e) => {
    e.target.classList.toggle('hidden')
    document.getElementById('open').classList.remove('hidden')
    const menu = document.getElementById('nav-mobile');
    menu.classList.add('hidden');
    //console.log(menu.classList);
  } */
  return (
    <div className='container'>
        <div className='nav-items'>
            <div className='logo'>MR.</div>
            <div className='bar-line'>
              <FaBars onClick={handleClickOpen} id='open'/>
              {/* <FaTimes className='hidden' onClick={handleClickClose} id='close'/> */}
            </div>
            <ul className='nav-menu'>
                <li className='item'>
                    <Link to={'/home'}><p>Home</p></Link>
                </li>
                <li className='item'>
                <Link to={'/about'}><p>About</p></Link>
                </li>
                <li className='item'>
                <Link to={'/project'}><p>Project</p></Link>
                </li>
                <li className='item'>
                <Link to={'/resume'}><p>Resume</p></Link>
                </li>
                <li className='item'>
                <Link to={'/git'}><p>GitHub</p></Link>
                </li>
            </ul>
        </div>
        <ul className='nav-menu-mobile hidden' id='nav-mobile'>
                <li className='item'>
                    <Link to={'/home'}><p>Home</p></Link>
                </li>
                <li className='item'>
                <Link to={'/about'}><p>About</p></Link>
                </li>
                <li className='item'>
                <Link to={'/project'}><p>Project</p></Link>
                </li>
                <li className='item'>
                <Link to={'/resume'}><p>Resume</p></Link>
                </li>
                <li className='item'>
                <Link to={'/git'}><p>GitHub</p></Link>
                </li>
            </ul>
        
    </div>
  )
}
