import React from 'react'
import './Section4.css'
import Speople from './images/Speople.png'

const Section4 = () => {
    return (
        <div className='section4'>
            <div className='section4_h1'>
                <h1>Online Courses</h1>
            </div>
            <div className='section4_content'>
                <div className='section4_text'>
                <h1>30,000+</h1>
                <p>Course Creators</p>
                <h1>80 million+</h1>
                <p>Courses taken</p>
                <h1>130+</h1>
                <p>Countries using Rugwarts</p>
                <h1>$600 million+</h1>
                <p>Earned by our course creators</p>
                </div>
                <div className='section4_image'>
                    <img src={Speople} alt= 'logo' />
                </div>

            </div>
            
        </div>
    )
}

export default Section4
