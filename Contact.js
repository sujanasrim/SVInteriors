import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const initialFormData = {
        fullName: '',
        email: '',
        message: ''
    };

    // Retrieve showMessage state from localStorage or default to false
    const [showMessage, setShowMessage] = useState(
        localStorage.getItem('showMessage') === 'true'
    );

    // Retrieve formData state from localStorage or default to initialFormData
    const [formData, setFormData] = useState(() => {
        const savedFormData = localStorage.getItem('formData');
        return savedFormData ? JSON.parse(savedFormData) : initialFormData;
    });

    const { fullName, email, message } = formData;

    // Store showMessage state in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('showMessage', showMessage);
    }, [showMessage]);

    // Store formData state in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

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

    // Reset form data and hide message on component unmount
    useEffect(() => {
        return () => {
            localStorage.removeItem('formData');
            localStorage.removeItem('showMessage');
        };
    }, []);

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
