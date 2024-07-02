import React from 'react';
import { Link } from 'react-router-dom';
import './ModularKitchenUnit.css';
import MKImage from './MK.jpg';
import D3 from './3d.jpg';
import D3_1Image from './MK_3D_1.jpg';
import D3_2Image from './MK_3D_2.jpg';

const ModularKitchenUnit = ({ onAddToCart }) => {
    const designs = [
        { id: 1, type: '2D', imageUrl: MKImage, altText: 'Modular Kitchen Design 1', downloadLink: 'MK.jpg' },
        { id: 2, type: '2D', imageUrl: D3, altText: 'Modular Kitchen Design 2', downloadLink: 'Modular_Kitchen_Design_2.jpg' },
        { id: 3, type: '3D', imageUrl: D3_1Image, altText: 'Modular Kitchen 3D Design 1', downloadLink: 'MK_3D_1.jpg' },
        { id: 4, type: '3D', imageUrl: D3_2Image, altText: 'Modular Kitchen 3D Design 2', downloadLink: 'MK_3D_2.jpg' }
    ];

    const addToCart = (imageUrl) => {
        onAddToCart(imageUrl);
        console.log('Item added to cart:', imageUrl);
    };

    return (
        <section>
            <h2>Modular Kitchen Designs</h2>

            <h3>2D Images</h3>
            <div className="image-container">
                {designs
                    .filter((design) => design.type === '2D')
                    .map((design) => (
                        <div key={design.id}>
                            <Link to={`/productdetails/${design.id}`} className="image-link">
                                <img src={design.imageUrl} alt={design.altText} className="service-img" />
                            </Link>
                            <button className="save-button" onClick={() => addToCart(design.imageUrl)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
            </div>

            <h3>3D Images</h3>
            <div className="image-container">
                {designs
                    .filter((design) => design.type === '3D')
                    .map((design) => (
                        <div key={design.id}>
                            <Link to={`/productdetails/${design.id}`} className="image-link">
                                <img src={design.imageUrl} alt={design.altText} className="service-img" />
                            </Link>
                            <button className="save-button" onClick={() => addToCart(design.imageUrl)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default ModularKitchenUnit;
