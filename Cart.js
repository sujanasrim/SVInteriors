import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
    const navigate = useNavigate();
    const [acceptedItems, setAcceptedItems] = useState([]);
    const [allAccepted, setAllAccepted] = useState(false);

    useEffect(() => {
        if (acceptedItems.length === cartItems.length && cartItems.length > 0) {
            setAllAccepted(true);
        } else {
            setAllAccepted(false);
        }
    }, [acceptedItems, cartItems]);

    const handleImageError = (e) => {
        e.target.src = 'default-image.png';
    };

    const handleAcceptQuote = (item) => {
        console.log(`Accept quote for item with ID ${item.id}`);
        setAcceptedItems((prevAcceptedItems) => [...prevAcceptedItems, item]);
    };

    const handleProceedToPayment = () => {
        navigate('/Payment', { state: { acceptedItems } });
        setAcceptedItems([]);
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.name} 
                                    className="cart-item-img" 
                                    onError={handleImageError}
                                />
                                <div className="item-details">
                                    <p>Name: {item.projectName}</p>
                                    <p>Status: {item.status}</p>
                                    {item.status === 'quoted' && (
                                        <p>Budget: ${item.projectBudget}</p>
                                    )}
                                </div>
                                <div className="button-group">
                                    <button 
                                        className="accept-button" 
                                        onClick={() => handleAcceptQuote(item)}
                                        disabled={acceptedItems.some((acceptedItem) => acceptedItem.id === item.id)}
                                    >
                                        {acceptedItems.some((acceptedItem) => acceptedItem.id === item.id) ? 'Accepted' : 'Accept'}
                                    </button>
                                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {allAccepted && (
                        <button className="proceed-button" onClick={handleProceedToPayment}>
                            Make Payment
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;
