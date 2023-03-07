// Importing dependencies, components, and style sheets
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Getting 'root' div from index.html
const root = createRoot(document.getElementById('root'));

// Rendering app component
root.render(<App />);
