import React from 'react'
import './Section3.css'
import Laptop from './images/Laptop.png'

const Section3 = () => {
    return (
        <div className='section3'>
            <div className='section3_h2'>
                <h2>Everything you need to run your education business under one roof</h2>
            </div>
            <div className='section3_text'>
                <div className='section3_list'>
                    <h2>Build your course</h2>
                    <p>Easily upload videos, build quizzes, and organize all your learning content with our drag and drop builder. 
                        Set pricing, schedule lessons, and automate your content to curate a learning experience your students will love.
                    </p>
                    
                    <ul>
                        <li>Design your course site</li>
                        <li>Market and Sell</li>
                        <li>Support your Students</li>
                        <li>Explore our features</li>
                    </ul>
                </div>
                <div className='section3_img'>
                    <img src={Laptop} alt='logo' />
                </div>
            </div>
            
        </div>
    )
}

export default Section3
