import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Productdetails.css'; // Ensure correct import path
import MKImage from './MK.jpg';
import D3 from './3d.jpg';
import D3_1Image from './MK_3D_1.jpg';
import D3_2Image from './MK_3D_2.jpg';
import MOD_TV1 from './MOD_TV1.jpg';
import MOD_TV2 from './MOD_TV2.jpg';
import TV_3D_1 from './TV_3D_1.jpg';
import TV_3D_2 from './TV_3D_2.jpg';
import BLCNY_1 from './BLCNY_1.jpg';
import BLCNY_2 from './BLCNY_2.jpg';
import BLCNY_3D_1 from './BLCNY_3D_1.jpg';
import BLCNY_3D_2 from './BLCNY_3D_2.jpg';

const ProductDetails = () => {
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState('');
    const [productName, setProductName] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [woodColor, setWoodColor] = useState('');

    useEffect(() => {
        switch (id) {
            case '1':
                setImageUrl(MKImage);
                setProductName('Modular Kitchen 2D Design');
                setDimensions('120cm x 180cm');
                setWoodColor('Sea Green Wood');
                break;
            case '2':
                setImageUrl(D3);
                setProductName('Modular Kitchen 2D Design');
                setDimensions('100cm x 200cm');
                setWoodColor('Oak Wood');
                break;
            case '3':
                setImageUrl(D3_1Image);
                setProductName('Modular Kitchen 3D Design');
                setDimensions('150cm x 220cm');
                setWoodColor('Walnut Wood');
                break;
            case '4':
                setImageUrl(D3_2Image);
                setProductName('Modular Kitchen 3D Design');
                setDimensions('140cm x 210cm');
                setWoodColor('Maple Wood');
                break;
            case '5':
                setImageUrl(MOD_TV1);
                setProductName('Modular TV 2D Design');
                setDimensions('160cm x 230cm');
                setWoodColor('Mahogany Wood');
                break;
            case '6':
                setImageUrl(MOD_TV2);
                setProductName('Modular TV 2D Design');
                setDimensions('170cm x 240cm');
                setWoodColor('Pine Wood');
                break;
            case '7':
                setImageUrl(TV_3D_1);
                setProductName('Modular TV 3D Design');
                setDimensions('180cm x 250cm');
                setWoodColor('Teak Wood');
                break;
            case '8':
                setImageUrl(TV_3D_2);
                setProductName('Modular TV 3D Design');
                setDimensions('190cm x 260cm');
                setWoodColor('Bamboo Wood');
                break;
            case '9':
                setImageUrl(BLCNY_1);
                setProductName('Balcony Makover 2D Design');
                setDimensions('200cm x 270cm');
                setWoodColor('Rosewood');
                break;
            case '10':
                setImageUrl(BLCNY_2);
                setProductName('Balcony Makover 2D Design');
                setDimensions('210cm x 280cm');
                setWoodColor('Ash Wood');
                break;
            case '11':
                setImageUrl(BLCNY_3D_1);
                setProductName('Balcony Makover 3D Design');
                setDimensions('220cm x 290cm');
                setWoodColor('Cedar Wood');
                break;
            case '12':
                setImageUrl(BLCNY_3D_2);
                setProductName('Balcony Makover 3D Design');
                setDimensions('230cm x 300cm');
                setWoodColor('Birch Wood');
                break;
            default:
                setImageUrl('');
                setProductName('');
                setDimensions('');
                setWoodColor('');
        }
    }, [id]);

    return (
        <section className="section-container">
            <h2>Product Details</h2>
            {imageUrl && (
                <div id="productImage">
                    <img src={imageUrl} alt="Product" className="service-img" />
                </div>
            )}
            <div id="productDetails">
                <h3>{productName}</h3>
                <table className="product-details-table">
                    <tbody>
                        <tr>
                            <th>Dimensions</th>
                            <td>{dimensions}</td>
                        </tr>
                        <tr>
                            <th>Wood Color</th>
                            <td>{woodColor}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ProductDetails;
