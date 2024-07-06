import React, { useState, Link } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './ClientL.css';

const ClientSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            alert("Sign up successful");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>Sign Up</button>
            </form>
            {error && <p className='error'>{error}</p>}
           <button onClick={() => navigate("/ClientLogin")} className='link-btn'>Already have an account? Sign In Here</button>
        </div>
    );
};

export default ClientSignup;