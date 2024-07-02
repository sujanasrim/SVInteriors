import React from 'react';
import { Link } from 'react-router-dom';
import './ModularTVUnit.css';
import MOD_TV1 from './MOD_TV1.jpg';
import MOD_TV2 from './MOD_TV2.jpg';
import TV_3D_1 from './TV_3D_1.jpg';
import TV_3D_2 from './TV_3D_2.jpg';

const ModularKitchenUnit = ({ onAddToCart }) => {
    const designs = [
        { id: 5, type: '2D', imageUrl: MOD_TV1, altText: 'Modular TV Design 1', downloadLink: 'MOD_TV1.jpg' },
        { id: 6, type: '2D', imageUrl: MOD_TV2, altText: 'Modular TV Design 2', downloadLink: 'MOD_TV2.jpg' },
        { id: 7, type: '3D', imageUrl: TV_3D_1, altText: 'Modular TV 3D Design 1', downloadLink: 'TV_3D_1.jpg' },
        { id: 8, type: '3D', imageUrl: TV_3D_2, altText: 'Modular TV 3D Design 2', downloadLink: 'TV_3D_2.jpg' }
    ];

    const addToCart = (imageUrl) => {
        onAddToCart(imageUrl);
        console.log('Item added to cart:', imageUrl);
    };

    return (
        <section>
            <h2>Modular TV Unit Designs</h2>

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
