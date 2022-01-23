import React from 'react'
import { Link } from 'react-router-dom'

import './landing.css'

export const LandingScreen = () => {
    return (
       
            <section className='grid'>
                <div className='grid__texts'>
                    <h2 className='grid__title'>Life is a trip,travelling is living twice</h2>
                    <button className='grid__button'><Link to='/home' className='grid__button--link'>Let's Start</Link></button>
                </div>
            </section>
    

    )
}
