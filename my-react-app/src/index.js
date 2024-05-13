import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import RecipePage from './Pages/RecipePage';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/RecipePage/:recipeId/:recipeTitle/:recipeIngredients/:recipeInstructions/:recipeImageName" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
