import React from 'react'
import './Getstarted.css'
import {Link} from 'react-router-dom'

const Getstarted = () => {
    return (
        <div className='getstarted'>
            <div className='get'>
                <h1>Let’s get Started</h1>
                <p>Create your Rugwarts account. Have an account?</p><Link to='/Login'>Login</Link>
                <div className='get_form'>
                    <div className='get_form_left'>
                        <p>First Name</p>
                        <input className='inp1' type='text' placeholder='Enter your first name' />
                        <p>Last Name</p>
                        <input className='inp1' type='text' placeholder='Enter your Last name' />
                        <p>Username</p>
                        <input className='inp1' type='text'/>
                        <p>Password</p>
                        <input className='inp1' type='password' />
                    </div>
                    <div className='get_form_centre'>
                        
                        <h4>OR</h4>
                    </div>
                    <div className='get_form_right'>
                        <button className='inp1' >Continue with Google</button>
                       <br />
                       <br />
                       <button className='inp1'>Continue with Apple</button>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Getstarted
