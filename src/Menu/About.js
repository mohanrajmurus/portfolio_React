import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContentAbout from '../Components/ContentAbout';
import Skillset from '../Components/Skillset';
import Toolset from '../Components/Toolset';
export default function About() {
  return (
    <div className='main-container'>
      <Navbar />
      <ContentAbout />
      <Skillset />
      <Toolset/>
      <Footer />
    </div>
  )
}
