import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='okay'>
                <h1>Login Into Your Account</h1>
                <p>New Rugwarts account. Have an account?<span>Sign Up</span></p>
                <div className='loginform'>
                    <div className='login_left'>
                        <form>
                            <p>Email Address or Username</p>
                            <input className='inp1' type="text" placeholder='you@example.com'/>
                            <p>Password</p>
                            <input className='inp1' type="number" />
                            <br />
                            <div className='me'>
                                <input type='checkbox' id='me' value='me'/>
                                <label for= 'me'>Remember Me</label>
                                <span id='spann'>Forgot Password?</span>
                            </div>
                            
                            <br />
                            <button className='loginbutton'>Login to your account</button>

                        </form>
                    </div>
                    <div className='login_centre'>
                        <h5>OR</h5>
                    </div>
                    <div className='login_right'>
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

export default Login
