import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import App from './App';
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}> {/* Wrap your App with Provider */}
        <App />
    </Provider>
);
reportWebVitals();
