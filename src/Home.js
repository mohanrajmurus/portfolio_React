import React, { Component } from 'react';
//import './Home.css';
import './css/Home.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import Findme from './Components/Findme';
import Footer from './Components/Footer';

class Home extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navbar />
        <Header name='Mohanraj Murugesan' jobRole='Front-end Developer' />
        <Main />
        <Findme />
        <Footer />
      </div>
    );
  }
}

export default Home;
