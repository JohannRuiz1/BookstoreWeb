// import { getCategories } from "./data";
// import { getBooksForCategory } from "./data";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import WelcomePage from "./pages/WelcomePage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";


export default function App() {
  
  return (
    <div className="app">
      <AppHeader/>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path="/cart" element={<CartPage/> } />
        <Route path="/checkout" element={<CheckoutPage/> } />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <AppFooter />
    </div>
  );
}