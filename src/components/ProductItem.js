import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { Link } from 'react-router-dom';
import placeholderImage from '../images/product-placeholder.png';

const ProductItem = ({ product }) => {
    const [addedToCard, setAddedToCard] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        setAddedToCard(true);
        dispatch(addToCart(product));
    };

    return (
        <div>
            <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl ? product.imageUrl : placeholderImage} alt="Product"/>
            </Link>

            <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
            </Link>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>
                 {addedToCard ? (<span>&#10003; Added</span>) : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductItem;
