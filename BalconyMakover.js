import React from 'react';
import { Link } from 'react-router-dom';
import './BalconyMakover.css';
import BLCNY_1 from './BLCNY_1.jpg';
import BLCNY_2 from './BLCNY_2.jpg';
import BLCNY_3D_1 from './BLCNY_3D_1.jpg';
import BLCNY_3D_2 from './BLCNY_3D_2.jpg';

const ModularKitchenUnit = ({ onAddToCart }) => {
    const designs = [
        { id: 9, type: '2D', imageUrl: BLCNY_1, altText: 'Balcony Makover Design 1', downloadLink: 'BLCNY_1.jpg' },
        { id: 10, type: '2D', imageUrl: BLCNY_2, altText: 'Balcony Makover Design 2', downloadLink: 'BLCNY_2.jpg' },
        { id: 11, type: '3D', imageUrl: BLCNY_3D_1, altText: 'Balcony Makover 3D Design 1', downloadLink: 'BLCNY_3D_1.jpg' },
        { id: 12, type: '3D', imageUrl: BLCNY_3D_2, altText: 'Balcony Makover 3D Design 2', downloadLink: 'BLCNY_3D_2.jpg' }
    ];

    const addToCart = (imageUrl) => {
        onAddToCart(imageUrl);
        console.log('Item added to cart:', imageUrl);
    };

    return (
        <section>
            <h2>Balcony Makover Designs</h2>

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
