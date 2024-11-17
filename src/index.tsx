import React from 'react';
import { createRoot} from "react-dom/client";
import App from '@src/App.tsx';
import './style/index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)