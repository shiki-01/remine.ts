import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

function render() {
    const rootElement = document.getElementById("app");
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
}

render();