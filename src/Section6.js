import React from 'react'
import './Section6.css'
import P1 from './images/Person1.png'
import P2 from './images/Person2.png'
import P3 from './images/Person3.png'
import P4 from './images/Person4.png'
import P5 from './images/Person5.png'
import P6 from './images/Person6.png'

const Section6 = () => {
    return (
        <div className='section6'>
            <div className='section6-h1'>
                <h1>
                Be Our Next Success Story
                </h1>
            </div>
            <div className='section6-flex'>
                <div className='section6-div1'>
                    <img className='P1' src={P1} alt='logo' />
                    <img className='P2' src={P2} alt='logo' />
                </div>
                <div className='section6-div2'>
                    <img className='P3' src={P3} alt='logo' />
                    <p>Rugwarts has really helped me achieve my long time dream of becoming a product designer</p>
                    <h4>Esther Adeyemi</h4>
                    <p>Graduate</p>
                </div>
                <div className='section6-div3'>
                    <img className='P4' src={P4} alt='logo' />
                    <p>The tutors are understanding and I don’t feel pressured because I study at my pace.</p>
                    <h4>Jim Shawn</h4>
                    <p>Undergraduate</p>
                </div>
                <div className='section6-div4'>
                    <img className='P5' src={P5} alt='logo' />
                    <img className='P6' src={P6} alt='logo' />

                </div>

            </div>
            
        </div>
    )
}

export default Section6
