import React, { Component } from 'react'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className='projects-container'>
                <div className='project' id='wandsattheready'>
                    <div className='project-details'>
                        <p>
                            Wands at the Ready is a hosted site, was created as a personal project, and is a fictional representation of Ollivander's wand shop from Harry Potter.
                        </p>
                        <p><span className='bold'>Technologies: </span>Node, React, Redux, Express, Axios, Bcrypt, Massive, PostGres, Cloudinary, SASS</p>
                        <p><span className='bold'>Github: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://github.com/phoenixoconnell/wands-at-the-ready.git'>WandsAtTheReady</a></p>
                        <p><span className='bold'>Site link: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://www.wandsattheready.com'>WandsAtTheReady.com</a></p>
                    </div>
                </div>
                <div className='project' id='digital-couch'>
                    <div className='project-details'>
                        <p>
                            Digital Couch is a hosted site, and was created as a group project. The idea behind Digital Couch is to provide a way for mental health clients and providers to connect outside of sessions with tools like timelines, journals, and provider notes. 
                        </p>
                        <p><span className='bold'>Technologies: </span>Node, React, Redux, Express, Axios, Bcrypt, Massive, PostGres, Cloudinary, SASS, React Big Calendar</p>
                        <p><span className='bold'>Github: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://github.com/team-digital-couch/digital-couch'>Digital Couch</a></p>
                        <p><span className='bold'>Site link: </span><a className='projects-link' rel='noopener noreferrer' target='_blank' href='https://www.digitalcouch.xyz'>DigitalCouch.xyz</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
