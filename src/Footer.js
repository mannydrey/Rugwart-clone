import React from 'react'
import './Footer.css'
import Logo from './images/Logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img src= {Logo} alt='logo' />
                <div className='ppp'>
                    <p>Bridging the gap between dreams and reality</p>
                </div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter-square"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='footer_centre0'>
                <h4>Resources</h4>
                <p>Features</p>
                <p>Pricing</p>
                <p>Login</p>
                <p>Sign Up</p>
            </div>
            <div className='footer_centre1'>
                <h4>Legal</h4>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Legal Notice</p>
            </div>
            <div className='footer_centre2'>
                <h4>Links</h4>
                <p>Blogs</p>
                <p>Tutors</p>
                <p>Bootcamps</p>
                <p>Courses</p>
            </div>
            <div className='footer_right'>
                <h4>Subscribe to Us</h4>
                <form className='formhold'>
                    <label>
                    <input className='frm_footer' placeholder='Email' />
                    </label>
                    <input id='Sendbtn' type="submit" value="Send"  />
                </form>
            </div>
            
        </div>
    )
}

export default Footer
