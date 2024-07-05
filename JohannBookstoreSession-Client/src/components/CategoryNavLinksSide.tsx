import { NavLink } from "react-router-dom";
import { useCategoryContext } from '../contexts/CategoryContext'; // Import the custom hook 

export default function CategoryNavLinks() {
  const { categories } = useCategoryContext(); // Use the custom hook to get categories 
  const categoryNavLinks = categories.map((category) => (
    <NavLink key={category.categoryId} to={`/category/${category.name}`} className={({ isActive }) =>
        isActive ? "active" : ""
      }>
      <button className="category-buttons">{category.name} </button></NavLink>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
