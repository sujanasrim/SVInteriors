import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const initialFormData = {
        fullName: '',
        email: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showMessage, setShowMessage] = useState(
        localStorage.getItem('showMessage') === 'true'
    );

    const { fullName, email, message } = formData;

    useEffect(() => {
        // When showMessage state changes, update localStorage
        localStorage.setItem('showMessage', showMessage);
    }, [showMessage]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission logic (e.g., API call)
        // For demonstration, we'll just log the form data
        console.log(formData);

        // Clear form after submission (optional)
        setFormData(initialFormData);

        // Show the message after submission
        setShowMessage(true);

        // Hide the message after 3 seconds (optional)
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            {showMessage ? (
                <div className="message-container">
                    <p>We will contact you shortly!</p>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;
