import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div className={'mb-5'}>
            <h2>Products</h2>
            <ProductList />
        </div>
    );
};

export default Home;
