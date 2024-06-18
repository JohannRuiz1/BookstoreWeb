// import { getCategories } from "./data";
// import { getBooksForCategory } from "./data";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import WelcomePage from "./pages/WelcomePage";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}
