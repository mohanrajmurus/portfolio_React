import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Project from './Menu/Project';
import About from './Menu/About';
import Git from './Menu/Git';
import Resume from './Menu/Resume';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/git' element={<Git />} />
        </Routes>
    </BrowserRouter>
    
)
