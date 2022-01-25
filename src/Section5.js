import React from 'react'
import './Section5.css'

const Section5 = () => {
    return (
        <div className='section5'>
            <div className='section5_h1'>
                <h1>Accomplish your course creation and student success goals faster with Rugwarts.</h1>
            </div>
            <div className='section5_form'>
            <form className='formhold'>
                <label>
                <input className='frm1' placeholder='you@example.com' />
                </label>
                <input id='getstartedbt' type="submit" value="Get Started"  />
            </form>
            </div>
            
        </div>
    )
}

export default Section5
