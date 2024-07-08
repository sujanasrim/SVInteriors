import React, { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from './firebase';
import './Quotation.css';

const Quotation = () => {
    const [quotedItems, setQuotedItems] = useState([]);

    useEffect(() => {
        const cartRef = ref(database, 'cart');

        const handleData = (snapshot) => {
            const cartData = snapshot.val();
            if (cartData) {
                const items = Object.keys(cartData)
                    .map(key => ({ id: key, ...cartData[key] }))
                    .filter(item => item.status === 'quoted');
                setQuotedItems(items);
            } else {
                setQuotedItems([]);
            }
        };

        onValue(cartRef, handleData);

        return () => {
            off(cartRef, handleData);
        };
    }, []);

    return (
        <div className="quotation">
            <h2>Quotation</h2>
            <ul className="quotation-list">
                {quotedItems.length === 0 ? (
                    <p>No quoted items.</p>
                ) : (
                    quotedItems.map((project) => (
                        <li key={project.id} className="quotation-item">
                            <img src={project.imageUrl} alt={project.projectName} className="quoted-item-img" />
                            <p>Name: {project.projectName}</p>
                            <p>Deadline: {project.projectDeadline}</p>
                            <p>Budget: ${project.projectBudget}</p>
                            <p>Comments: {project.projectComments}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Quotation;
