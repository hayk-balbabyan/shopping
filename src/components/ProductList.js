import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="grid cols-1 md-cols-2 lg-cols-3 xl-cols-4 gap-20">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
