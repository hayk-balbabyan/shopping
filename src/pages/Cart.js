import React from 'react';
import { connect } from 'react-redux';
import placeholderImage from "../images/product-placeholder.png";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {

    const calculateTotal = (cartItems) => {
        const total = cartItems.reduce((total, item) => {
            const itemTotal = item.product.price * item.quantity;
            return total + itemTotal;
        }, 0);
        return total.toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Product Price</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.product.id}>
                            <td>
                                <div className={'flex items-center gap-10'}>
                                    <img width={50} src={item.product.imageUrl ? item.product.imageUrl : placeholderImage} alt="Product"/>
                                    {item.product.title}
                                </div>
                            </td>
                            <td>
                                <div className="qty-wrapper">
                                    <button onClick={() => decreaseQuantity(item.product.id)}>-</button>
                                    <span className={'qty'}>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.product.id)}>+</button>
                                </div>
                            </td>
                            <td>{item.product.price}</td>
                            <td>
                                <button onClick={() => removeFromCart(item.product.id)} className={'danger'}>
                                    &times;
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
            <p className={'cart-totals-wrapper'}>
                <span className={'total-amount'}>Total: ${calculateTotal(cart)}</span>
            </p>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: productId =>
            dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } }),
        increaseQuantity: productId =>
            dispatch({ type: 'INCREASE_QUANTITY', payload: { productId } }),
        decreaseQuantity: productId =>
            dispatch({ type: 'DECREASE_QUANTITY', payload: { productId } }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
