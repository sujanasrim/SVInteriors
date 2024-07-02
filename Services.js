// src/components/Services.js
import React from 'react';
import './Services.css';
import MK from './MK.jpg';
import MOD_TV from './MOD_TV.jpg';
import BALCONY from './BALCONY.jpg';

function Services() {
    return (
        <section>
            <h2>Our Services</h2>
            <div className="service-container">
                <div className="service-card">
                    <a href="ModularKitchenUnit">
                        <p>Modular Kitchen</p>
                        <img src={MK} alt="Service 1" className="service-img" />
                    </a>
                </div>
                <div className="service-card">
                    <a href="ModularTVUnit">
                        <p>Modular TV Unit</p>
                        <img src={MOD_TV} alt="Service 2" className="service-img" />
                    </a>
                </div>
                <div className="service-card">
                    <a href="BalconyMakover">
                        <p>Balcony Makeovers</p>
                        <img src={BALCONY} alt="Service 3" className="service-img" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;
