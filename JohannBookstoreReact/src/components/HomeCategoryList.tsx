import { getCategories } from "../data";
import { Link } from "react-router-dom";
import HomeCategoryListItem from "./HomeCategoryListItem";
import "./HomeCategoryList.css";
export default function HomeCategoryList() {
  const categoryList = getCategories();
  const categoryImageLinks = categoryList.map((myCategory) => (
    <li key={myCategory.categoryId}>
      <Link to={`/category/${myCategory.name}`}>
        <HomeCategoryListItem category={myCategory} />
      </Link>
    </li>
  ));

  return <ul>{categoryImageLinks}</ul>;
}
