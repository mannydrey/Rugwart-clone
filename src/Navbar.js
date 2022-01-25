import React from 'react'
import './Navbar.css'
import Logo from './images/Logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    let url = ''
    return (
        <div className='Navbar'>
            <div className='Navbar_left'>
                <Link to= '/'><img src= {Logo} alt='logo' /></Link>
            </div>
            <div className='Navbar_centre'>
                <a href= {url}>Features</a>
                <a href= {url}>Contacts</a>
                <a href= {url}>Pricing</a>
                <a href= {url}>About Us</a>
                <a href= {url}>Plus</a>
            </div>
            <div className='Navbar_right'>
                <Link to='/Login'>Login</Link>
                <Link to='/Getstarted'><button id='getstartedbtn'>Get Started</button></Link>
            </div>
            
        </div>
    )
}

export default Navbar
