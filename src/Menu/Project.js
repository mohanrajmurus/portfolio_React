import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Projectcontent from '../Components/Projectcontent';

export default function Project() {
  return (
    <div className='main-container'>
      <Navbar />
      <Projectcontent />
      <Footer />
    </div>
  )
}
