import React from 'react'
import './Section1.css'
import Fpeople from './images/Fpeople.png'

const Section1 = () => {
    return (
        <div className='section1'>
            <div className='section1_left'>
                <div className='section_h1'>
                    <h1>Discover new things to enrich your skill anytime anywhere.</h1>
                </div>
                <div className='section1_p'>
                    <p>Education makes you discover a mirror purpose and achieve window result.</p>
                </div>
                <div>
                <form className='formhold'>
                    <label>
                    <input className='frm1' placeholder='you@example.com' />
                    </label>
                    <input id='getstartedbt' type="submit" value="Get Started"  />
                </form>
                </div>

            </div>
            <div className='section1_right'>
                <img src={Fpeople} alt='logo' />
            </div>

            
        </div>
    )
}

export default Section1
