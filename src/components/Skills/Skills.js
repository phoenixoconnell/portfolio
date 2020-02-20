import React from 'react'
import reduxLogo from './redux-logo.svg'
import restLogo from './rest-logo.svg'
import './Skills.css'
import resume from '../../PhoenixResume.pdf'

export default function Skills() {
    return (
        <div className='skills-container'>
            <div className='skills-list'>
                <div className='skill-container'><i class="fab fa-html5"></i><span className='skill-name'>HTML 5</span></div>
                <div className='skill-container'><i class="fab fa-css3-alt"></i><span className='skill-name'>CSS 3</span></div>
                <div className='skill-container'><i class="fab fa-js-square"></i><span className='skill-name'>Javascript</span></div>
                <div className='skill-container'><i class="fab fa-node-js"></i><span className='skill-name'>Node.js</span></div>
                <div className='skill-container'><i class="fab fa-react"></i><span className='skill-name'>React.js</span></div>
                <div className='skill-container'><i class="fab fa-git"></i><span className='skill-name'>Git</span></div>
                <div className='skill-container'><i class="fab fa-github"></i><span className='skill-name'>Github</span></div>
                <div className='skill-container'><i class="fab fa-npm"></i><span className='skill-name'>NPM</span></div>
                <div className='skill-container'><img className='fab' src={reduxLogo} alt='Redux' /><span className='skill-name'>Redux</span></div>
                <div className='skill-container'><img className='fab' src={restLogo} alt='Rest' /><span className='skill-name'>REST</span></div>
            </div>
            <div className='resume-container'>
                <h1 className='resume-h1'>Download my Full Resume <a className='contact-resume' href={resume} download>Here</a></h1>
            </div>
        </div>
    )
}