import React, {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import './Contact.css'
import resume from '../../PhoenixResume.pdf'

export default function Contact() {
    const [state, setState] = useState({
        from: '',
        subject: '',
        text: ''
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const send = () => {
        const {from, subject, text} = state
        console.log(state)

        axios.post('/api/mail', {from, subject, text})
            .then(res => toast.success(res.data.message))
            .catch(err => {
                console.dir(err.response)
                toast.error(err.response.data.message)
            })
    }

    return (
        <div className='contact-container'>
            <div className='contact-link-badges-container'>
                <h1 className='contact-h1'>Find me here...</h1>
                <div className='contact-link-badges'>
                    <a href='https://github.com/phoenixoconnell' rel='noopener noreferrer' className='contact-link' target='_blank'><i class='fab fa-github' /></a>
                    <a href='https://www.linkedin.com/in/phoenix-shane-962426161' rel='noopener noreferrer' className='contact-link' target='_blank'><i class='fab fa-linkedin' /></a>
                </div>
            </div>
            <div className='contact-resume-container'>
                <h1 className='contact-h1'>Or download my resume <a className='contact-resume' href={resume} download>Here...</a></h1>
            </div>
            <div className='contact-me'>
                <h1>Or Contact Me Directly</h1>
            </div>
            <div className='contact-email-form'>
                <div className='contact-email-form-inputs'>
                    <input name='from' placeholder='Your Email Address' onChange={handleChange} />
                    <input name='subject' placeholder='Subject' onChange={handleChange} />
                </div>
                <textarea name='text' placeholder='Email content' onChange={handleChange} />
                <button onClick={send}>Send!</button>
            </div>
            <div>

            </div>
        </div>
    )
}