import { getCategories } from "../data";
import { NavLink } from "react-router-dom";
export default function CategoryNavLinks() {
  const categoryList = getCategories();
  const categoryNavLinks = categoryList.map((category) => (
    <li key={category.categoryId}>
      <NavLink to={`/category/${category.name}`}>{category.name}</NavLink>
    </li>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
