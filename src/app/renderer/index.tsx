import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from "./App";

function render() {
    const rootElement = document.getElementById("app");
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

render();