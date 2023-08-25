import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import placeholderImage from "../images/product-placeholder.png";
import {addToCart} from "../redux/actions";

const ProductPage = () => {
    const [addedToCard, setAddedToCard] = useState(false);
    const { id } = useParams();
    const product = useSelector(state => state.products.find(prod => prod.id === Number(id)));
    const dispatch = useDispatch();
    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        setAddedToCard(true)
        dispatch(addToCart(product));
    };

    return (
        <div className={'grid md-cols-2 gap-50'}>
            <div>
                <img src={product.imageUrl ? product.imageUrl : placeholderImage} alt={product.title} />
            </div>
            <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <button onClick={handleAddToCart}>
                    {addedToCard ? (<span>&#10003; Added</span>) : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
