import { combineReducers } from 'redux';

const initialProducts = [
    {id: 1,title: 'Product 1',price: 10.99,imageUrl: '',},
    {id: 2,title: 'Product 2',price: 19.99,imageUrl: '',},
    {id: 3,title: 'Product 3',price: 15.99,imageUrl: '',},
    {id: 4,title: 'Product 4',price: 8.99,imageUrl: '',},
    {id: 5,title: 'Product 5',price: 12.99,imageUrl: '',},
    {id: 6,title: 'Product 6',price: 7.99,imageUrl: '',},
    {id: 7,title: 'Product 7',price: 14.99,imageUrl: '',},
    {id: 8,title: 'Product 8',price: 9.99,imageUrl: '',},
    {id: 9,title: 'Product 9',price: 16.99,imageUrl: '',},
    {id: 10,title: 'Product 10',price: 11.99,imageUrl: '',},
    {id: 11,title: 'Product 11',price: 6.99,imageUrl: '',},
    {id: 12,title: 'Product 12',price: 13.99,imageUrl: '',},
    {id: 13,title: 'Product 13',price: 18.99,imageUrl: '',},
    {id: 14,title: 'Product 14',price: 5.99,imageUrl: '',},
    {id: 15,title: 'Product 15',price: 20.99,imageUrl: '',},
    {id: 16,title: 'Product 16',price: 9.49,imageUrl: '',}
];

export function productsReducer(state = initialProducts, action) {
    switch (action.type) {
        // Add cases for different actions if needed
        default:
            return state;
    }
}

export function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload;
            const productId = action.payload.id;
            if (state.some(item => item.product.id === productId)) {
                // If the product is already in the cart, update its quantity
                return state.map(item =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If the product is not in the cart, add it
                return [...state, { product, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':
            const productToRemoveId = action.payload.productId;
            return state.filter(item => item.product.id !== productToRemoveId);
        case 'INCREASE_QUANTITY':
            if (state.some(item => item.product.id === action.payload.productId)) {
                // If the product is already in the cart, update its quantity
                return state.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return state;
        case 'DECREASE_QUANTITY':
            if (state.some(item => item.product.id === action.payload.productId)) {
                // If the product is already in the cart, update its quantity
                return state.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
                        : item
                );
            }
            return state;
        // Add more cases for different cart actions if needed
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export default rootReducer;

