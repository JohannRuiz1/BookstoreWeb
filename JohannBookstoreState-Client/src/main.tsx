// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./assets/global.css";
// import "./index.css";
import { CategoryProvider } from './contexts/CategoryContext';
import { CartProvider } from './contexts/CartContext.tsx';



ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CategoryProvider>
        <CartProvider>
          <App />
        </CartProvider>      
      </CategoryProvider>
    </BrowserRouter>
  // </React>
);

