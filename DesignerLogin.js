import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import './ClientL.css';

const DesignerLogin = () => {
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

            // Navigate to designer dashboard or profile page
            navigate('/Designer');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent. Check your inbox.');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='clientlogin-container'>
            <h1>Designer Sign In</h1>
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
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary btn-block'>Sign In</button>
                    <button type='button' className='btn btn-link' onClick={handleForgotPassword}>Forgot Password?</button>
                </div>
            </form>
            {error && <p className='error'>{error}</p>}
        </div>
    );
};

export default DesignerLogin;
