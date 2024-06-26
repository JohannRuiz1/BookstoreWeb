import { CategoryProps } from "../types";

import { NavLink } from "react-router-dom";
export default function CategoryNavLinks(props: CategoryProps) {
  const categoryList = props.categories;
  const categoryNavLinks = categoryList.map((category) => (
    <li key={category.categoryId}>
      <NavLink to={`/category/${category.name}`}>{category.name}</NavLink>
    </li>
  ));

  return <ul>{categoryNavLinks}</ul>;
}
