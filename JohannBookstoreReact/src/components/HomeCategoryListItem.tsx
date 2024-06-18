import { CategoryItem } from "../types";
import { getSlug } from "../utils";
import { categoryImagePrefix } from "../utils";
import { Link } from "react-router-dom";
import "./HomeCategoryListItem.css";
export default function HomeCategoryListItem(props: {
  category: CategoryItem;
}) {
  const categoryImageFilename = `${getSlug(props.category.name)}.jpg`;

  return (
    <div className="category-box">
      <Link to={`/category/${props.category.name}`}>
        <img
          src={`${categoryImagePrefix}${categoryImageFilename}`}
          alt={props.category.name}
          height="180"
          width="auto"
        />
        <div className="overlay">{props.category.name}</div>
      </Link>
    </div>
  );
}
