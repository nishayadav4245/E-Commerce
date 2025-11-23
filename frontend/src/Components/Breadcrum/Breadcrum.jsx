import React from "react";
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;
    
    // Check if product exists and has required properties
    if (!product) {
        return <div className="breadcrum">Loading...</div>;
    }

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt=""/> 
            SHOP <img src={arrow_icon} alt=""/> 
            {product.category || 'Product Category'} <img src={arrow_icon} alt=""/> 
            {product.name || 'Product Name'}
        </div>
    )
}

export default Breadcrum;