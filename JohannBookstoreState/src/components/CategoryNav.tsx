import CategoryNavLinksSide from "./CategoryNavLinksSide.tsx";
import "./CategoryNav.css";
import { CategoryProps } from "../types.ts";

export default function CategoryNav(props: CategoryProps) {
  return (
    <div className="button-column">
        <CategoryNavLinksSide categories={props.categories} />
    </div>
  );
}
