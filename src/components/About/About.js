import React from 'react'
import headshot from '../../headshot.jpg'
import './About.css'

export default function About() {
    return (
        <div className='about-container'>
            <div className='about-img-container'>
                <img className='about-img' src={headshot} alt='headshot' />
            </div>
            <div className='about-content-container'>
                <h1 className='about-content-h1'>About Me</h1>
                <p className='about-content'>
                    Born and raised in Dallas, Texas, I am a person of many passions. I am an avid reader of a wide range of genres, with a general focus on anthropology and human studies such as culture and linguistics. I enjoy all things nerdy, with Harry Potter being a top favorite along with anime and video games. Music is integrated into every possible aspect of my life, from instruments to live performances to the favorite songs that make up the soundtrack of my life. I am a forever student, and you will always find me working on one subject or another.
                </p>
            </div>
        </div>
    )
}