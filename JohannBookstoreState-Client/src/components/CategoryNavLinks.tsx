import { NavLink } from "react-router-dom";
import { useCategoryContext } from '../contexts/CategoryContext'; // Import the custom hook 

export default function CategoryNavLinks() {
  const { categories } = useCategoryContext(); // Use the custom hook to get categories 
  const categoryNavLinks = categories.map((category) => (
    <li key={category.categoryId}>
      <NavLink to={`/category/${category.name}`}>{category.name}</NavLink>
    </li>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
