import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useHistory} from "react-router-dom";

const LoginForm=() => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const history = useHistory();
    function handleSubmit(e){
        

    }
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p>{error} </p>}
                <div className='input-box'>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <a href='#'>Forgot password</a>
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;