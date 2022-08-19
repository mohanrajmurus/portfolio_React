import React from 'react';
import '../css/project.css';
import portfolio from '../images/portfolio.svg';
import todo from '../images/todo.svg';
import billing from '../images/Billing.svg';
import prograss from '../images/prograss.svg';
import signup from '../images/signup.svg';
import search from '../images/search.svg';

export default function Projectcontent() {
  return (
    <div className='container'>
        <section className='project-container'>
            <div className='text-area'>
                <h2>My Recent <span>Works</span></h2>
                <p>Here are a few projects I've worked on recently.</p>
            </div>
            <div className='project-cards'>
                <div className='project-card'>
                    <img src={portfolio} alt='portfilio'/>
                    <h3>Protfolio</h3>
                    <p>To-Do List project is an application specially built to keep track of tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
                    <div className='buttons'>
                        <button><a href='#' target={'_blank'}>GitHub</a></button>
                        <button><a href='#' target={'_blank'}>Live Demo</a></button>
                    </div>
                </div>  
                <div className='project-card'>
                    <img src={todo} alt='todo'/>
                    <h3>ToDo App</h3>
                    <p>To-Do List project is an application specially built to keep track of tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
                    <div className='buttons'>
                        <button><a href='#' target={'_blank'}>GitHub</a></button>
                        <button><a href='#' target={'_blank'}>Live Demo</a></button>
                    </div>
                </div>  
                <div className='project-card'>
                    <img src={billing} alt='billing'/>
                    <h3>Restaurant Billing System</h3>
                    <p>To-Do List project is an application specially built to keep track of tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
                    <div className='buttons'>
                        <button><a href='#' target={'_blank'}>GitHub</a></button>
                        <button><a href='#' target={'_blank'}>Live Demo</a></button>
                    </div>
                </div>  
                <div className='project-card'>
                    <img src={signup} alt='signup'/>
                    <h3>SignUp/Login</h3>
                    <p>To-Do List project is an application specially built to keep track of tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
                    <div className='buttons'>
                        <button><a href='#' target={'_blank'}>GitHub</a></button>
                        <button><a href='#' target={'_blank'}>Live Demo</a></button>
                    </div>
                </div>  
                <div className='project-card'>
                    <img src={prograss} alt='prograss'/>
                    <h3>Prograss Bar</h3>
                    <p>To-Do List project is an application specially built to keep track of tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
                    <div className='buttons'>
                        <button><a href='#' target={'_blank'}>GitHub</a></button>
                        <button><a href='#' target={'_blank'}>Live Demo</a></button>
                    </div>
                </div>  
                <div className='project-card'>
                    <img src={search} alt='search'/>
                    <h3>Search Icon Hidden</h3>
                    <p>To-Do List project is an application specially built to keep track of tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
                    <div className='buttons'>
                        <button><a href='#' target={'_blank'}>GitHub</a></button>
                        <button><a href='#' target={'_blank'}>Live Demo</a></button>
                    </div>
                </div>  
            </div>
        </section>

    </div>
  )
}
