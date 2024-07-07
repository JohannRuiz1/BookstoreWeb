import { useState } from "react";
import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";

export default function HeaderDropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div
      className="header-dropdown"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <div className="category">
        <h4 className="category-title">Categories</h4>
        <span className="category-icon">
          <i className="fa-solid fa-angle-down"></i>
        </span>
        <ul className={`dropdown-menu ${isDropdownVisible ? 'visible' : ''}`}>
          <CategoryNavLinks />
        </ul>
      </div>
    </div>
  );
}
