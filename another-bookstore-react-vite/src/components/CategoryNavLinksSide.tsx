import { getCategories } from "../data";
import { NavLink } from "react-router-dom";
export default function CategoryNavLinks() {
  const categoryList = getCategories();
  const categoryNavLinks = categoryList.map((category) => (
    <NavLink to={`/category/${category.name}`} className={({ isActive }) =>
        isActive ? "active" : ""
      }>
      <button key={category.categoryId} className="category-buttons">{category.name} </button></NavLink>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
