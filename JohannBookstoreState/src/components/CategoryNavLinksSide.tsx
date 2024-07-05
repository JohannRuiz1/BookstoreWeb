import { NavLink } from "react-router-dom";
import { CategoryProps } from "../types";

export default function CategoryNavLinks(props: CategoryProps) {


  const categoryNavLinks = props.categories.map((category) => (
    <NavLink to={`/category/${category.name}`} className={({ isActive }) =>
        isActive ? "active" : ""
      }>
      <button key={category.categoryId} className="category-buttons">{category.name} </button></NavLink>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
