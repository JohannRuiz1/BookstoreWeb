import HeaderDropdown from "./HeaderDropdown";
import { Link } from "react-router-dom";
import "./AppHeader.css";
export default function AppHeader() {
  return (
    <header className="container">
      <Link to="/" className="no-underline">
          <div className="bookstore">
              <h3 className="bookstore-title">Scriptoria</h3>          
              <span className="bookstore-logo">
                  <i className="fa-brands fa-fort-awesome"></i>
              </span>
          </div>
      </Link>
      <HeaderDropdown />
      <div className="search-bar">
        <form action="/" className="search-form">
          <input className="search-text" type="text" placeholder="Search for books!"/>
          <button className="icon-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> 
        </form>
      </div>
      <div className="shopping-cart">
        <i className="fa-solid fa-basket-shopping"></i>
        2
      </div>
      <div>
        <button className="login-button">Login</button> 
      </div>
    </header>
  );
}
