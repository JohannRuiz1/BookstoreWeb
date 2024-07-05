// import { getCategories } from "./data";
// import { getBooksForCategory } from "./data";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import WelcomePage from "./pages/WelcomePage";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "./utils";
import { useState, useEffect } from "react";


export default function App() {
  const [categories, setCategories]  = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/categories`)
        .then((result) => setCategories(result.data))
        .catch(console.error);
  }, []);

  
  return (
    <div className="app">
      <AppHeader categories= {categories }/>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage categories= {categories }/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <AppFooter />
    </div>
  );
}
