import React, { useState, useEffect } from 'react';
import { ref, onValue, remove, off } from 'firebase/database';
import { database } from './firebase';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartRef = ref(database, 'cart');

        const handleData = (snapshot) => {
            const cartData = snapshot.val();
            if (cartData) {
                const items = Object.keys(cartData).map(key => ({
                    id: key,
                    ...cartData[key]
                }));
                setCartItems(items);
            } else {
                setCartItems([]);
            }
        };

        onValue(cartRef, handleData);

        // Clean up listener
        return () => {
            off(cartRef, handleData);
        };
    }, []);

    const handleRemoveFromCart = (itemId) => {
        const itemRef = ref(database, `cart/${itemId}`);
        remove(itemRef)
            .then(() => {
                setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
            })
            .catch(error => {
                console.error('Error removing item from cart:', error);
            });
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                            <p>Status: {item.status}</p>
                            {item.status === 'quoted' && <p>Quote: ${item.quote}</p>}
                            <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
