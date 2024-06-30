import './CategoryPage.css'; // Ensure this path is correct
import CategoryNav from "../components/CategoryNav";
// import child components
import CategoryBookList from "../components/CategoryBookList";
import { CategoryProps } from "../types";
import axios from "axios";
import { apiUrl } from "./../utils";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

// import CSS style file (note: no styles for this page)
// export component function
export default function CategoryPage(props: CategoryProps) {
  const { categoryName } = useParams();
  const [books, setBooks]  = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/categories/name/${categoryName}/books`)
        .then((result) => setBooks(result.data))
        .catch(console.error);
  }, []);
  
  return (
    <div className="category">
      <CategoryNav categories={props.categories} />
      <CategoryBookList books={books}/>
    </div>
  );
}
