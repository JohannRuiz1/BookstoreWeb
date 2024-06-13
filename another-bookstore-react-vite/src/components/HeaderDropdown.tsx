import CategoryNavLinks from "./CategoryNavLinks.tsx";
import "./HeaderDropdown.css";
export default function HeaderDropdown() {
  return (
    <div className="header-dropdown">
      <div className="category">
        <h4 className="category-title">Categories</h4>
        <span className="category-icon">
            <i className="fa-solid fa-angle-down"></i>
        </span>
        <CategoryNavLinks />
      </div>
    </div>
  );
}
