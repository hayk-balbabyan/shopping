import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import './App.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
