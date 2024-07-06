import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ref, onValue, remove, off } from 'firebase/database';
import { database } from './firebase';


import CustomerActions from './CustomerActions';
import DesignerActions from './DesignerActions';

import ClientSignup from './ClientSignup';
import ClientLogin from './ClientLogin';

import DesignerSignup from './DesignerSignup';
import DesignerLogin from './DesignerLogin';

import Home from './Home';

import Services from './NavPages/Services';

import ModularKitchenUnit from './NavPages/ModularKitchenUnit';
import ModularTVUnit from './NavPages/ModularTVUnit';
import BalconyMakover from './NavPages/BalconyMakover';

import Productdetails from './NavPages/Productdetails';
import Cart from './Cart';

import './Navbar.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Designer from './Designer';

import Quotation from './Quotation';

import Payment from './Payment'; 
import PaymentSuccess from './PaymentSuccess';

import Contact from './Contact';


function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartRef = ref(database, 'cart');

        const handleData = (snapshot) => {
            const cartData = snapshot.val();
            if (cartData) {
                const items = Object.keys(cartData).map(key => ({
                    id: key,
                    ...cartData[key]
                }));
                setCart(items);
            } else {
                setCart([]);
            }
        };

        onValue(cartRef, handleData);

        // Clean up listener
        return () => {
            off(cartRef, handleData);
        };
    }, []);

    const handleAddToCart = (design) => {
        setCart((prevCart) => [...prevCart, design]);
    };

    const removeFromCart = (itemId) => {
        const itemRef = ref(database, `cart/${itemId}`);
        remove(itemRef)
            .then(() => {
                setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
            })
            .catch(error => {
                console.error('Error removing item from cart:', error);
            });
    };

    return (
        <Router>
            <div>
                <Navbar cartItems={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/CustomerActions" element={<CustomerActions />} />
                    <Route path="/DesignerActions" element={<DesignerActions />} />

                    <Route path="/ClientLogin" element={<ClientLogin userType="client" />} />
                    <Route path="/ClientSignup" element={<ClientSignup />} />

                    <Route path="/DesignerLogin" element={<DesignerLogin userType="designer" />} />
                    <Route path="/DesignerSignup" element={<DesignerSignup />} />

                    <Route path="/Services" element={<Services />} />

                    <Route path="/ModularKitchenUnit" element={<ModularKitchenUnit onAddToCart={handleAddToCart} />} />
                    <Route path="/ModularTVUnit" element={<ModularTVUnit onAddToCart={handleAddToCart} />} />
                    <Route path="/BalconyMakover" element={<BalconyMakover onAddToCart={handleAddToCart} />} />

                    <Route path="/Productdetails/:id" element={<Productdetails />} />

                    <Route path="/Cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />

                    <Route path="/Designer" element={<Designer />} />

                    <Route path="/Quotation" element={<Quotation />} />

                    <Route path="/Payment" element={<Payment />} />

                    <Route path="/PaymentSuccess " element={<PaymentSuccess  />} />

                    <Route path="/Contact" element={<Contact />} />
                </Routes>
                <Footer />             
            </div>
        </Router>
    );
}

export default App;
