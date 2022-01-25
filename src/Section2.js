import React from 'react'
import './Section2.css'
import Number1 from './images/Number1.svg'

const Section2 = () => {
    return (
        <div className='section2'>
            <div className='tips'>
                <h1>Tips to get started</h1>
                <p>We now offer best-in-class apps in the Rugwarts App Store for course creators. Easily customize your 
                    course experience—no matter your expertise—so you can build exactly what you want. No coding required.</p>
            </div>
            <div className='section2_threedivs'>
                <div className='section2_content side1'>
                    <div>
                        <img src= {Number1} alt='logo' />
                    </div>
                    <div>
                        <h4>Powerful customization with the click of a button</h4>
                        <p>We now offer best-in-class apps in the Rugwarts App Store for course creators. Easily customize your course experience, 
                            no matter your expertise so you can build exactly what you want. No coding required.</p>
                    </div>
                </div>
                <div className='section2_content side2'>
                    <div>
                        <img src= {Number1} alt='logo' />
                    </div>
                    <div>
                        <h4>Total control over your content, pricing, and data</h4>
                        <p>You have the freedom and flexibility to run your course business however you choose. Take full control over site design, 
                            content, course pricing, student information, and more. You get paid instantly and own 100% of your data.</p>
                    </div>
                </div>
                <div className='section2_content side3'>
                    <div>
                        <img src= {Number1} alt='logo' />
                    </div>
                    <div>
                        <h4>Seamless automation lets you work without worry</h4>
                        <p>Automatic onboarding, student messaging, completion certificates, and more. Ensure your students 
                            get a world-class education every time so you’re free to tackle your big picture goals.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Section2
