import './CategoryPage.css'; // Ensure this path is correct
import CategoryNav from "../components/CategoryNav";
// import child components
import CategoryBookList from "../components/CategoryBookList";
import { CategoryProps } from "../types";


// import CSS style file (note: no styles for this page)
// export component function
export default function CategoryPage(props: CategoryProps) {

  
  return (
    <div className="category">
      <CategoryNav categories={props.categories} />
      <CategoryBookList/>
    </div>
  );
}
