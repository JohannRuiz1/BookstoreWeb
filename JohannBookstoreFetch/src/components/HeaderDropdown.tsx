import CategoryNavLinks from "./CategoryNavLinks.tsx";
import { CategoryProps } from "../types";
import "./HeaderDropdown.css";

export default function HeaderDropdown(props: CategoryProps) {
  return (
    <div className="header-dropdown">
      <div className="category">
        <h4 className="category-title">Categories</h4>
        <span className="category-icon">
            <i className="fa-solid fa-angle-down"></i>
        </span>
        <CategoryNavLinks categories={props.categories}/>
      </div>
    </div>
  );
}
