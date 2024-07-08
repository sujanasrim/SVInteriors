import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import './Home.css';
import HOMEPAGE1 from './HOMEPAGE1.webp';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    const handleCustomerClick = () => {
        navigate('/CustomerActions');
    };
    
    const handleDesignerClick = () => {
        navigate('/DesignerActions');
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/signin");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className='container'>
            {email ? (
                <>
                    <h1>Home Page</h1>
                    <p className='welcome'>Hi {email}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            ) : (
                <>
                    <div className='welcome-container'>
                        <h1>WELCOME TO SV DESIGNS</h1>
                        <p className='welcome-message'>Explore our services</p>
                    </div>
                    <div className='buttons-container'>
                        <img src={HOMEPAGE1} alt="Service1" className="service-img" />
                        <div className='buttons'>
                            <button onClick={handleCustomerClick}>Customer Space</button>
                            <button onClick={handleDesignerClick}>Designer Space</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
