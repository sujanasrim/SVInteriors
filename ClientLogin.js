import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './ClientL.css';

const ClientLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed in:', user.uid);
            
            // Optionally store user data in localStorage or session
            localStorage.setItem('userId', user.uid);

            // Navigate to services or client specific page
            navigate('/services');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='clientlogin-container'>
            <h1>Client Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary btn-block'>Sign In</button>
            </form>
            {error && <p className='error'>{error}</p>}
        </div>
    );
};

export default ClientLogin;
