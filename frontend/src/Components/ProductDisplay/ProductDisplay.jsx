import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Check if product exists before rendering
    if (!product) {
        return <div className="productdisplay">Loading product...</div>;
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} />
                    <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} />
                    <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} />
                    <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} />
                </div>
                <div className="productdisplay-img">
                    <img 
                        className="productdisplay-main-img" 
                        src={product.image || '/placeholder.jpg'} 
                        alt={product.name || 'Product'} 
                    />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name || 'Product Name'}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Star (dull)" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price || '00.00'}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price || '00.00'}
                    </div>
                </div>
                <div className="product-right-description">
                    {product.description || 'A lightweight, usually knitted, pullover shirt...'}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category:</span> {product.category || 'Women, T-shirt, Crop Top'}
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags:</span> Modern, Latest
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;