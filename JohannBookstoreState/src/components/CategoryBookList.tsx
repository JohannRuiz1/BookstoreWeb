// import types
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookLIstItem";
import axios from "axios";
import { apiUrl } from "./../utils";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export default function CategoryBookList() {
  const { categoryName } = useParams();
  const [books, setBooks]  = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/categories/name/${categoryName}/books`)
        .then((result) => setBooks(result.data))
        .catch(console.error);
  }, [categoryName]);

  const bookBoxList = books.map((myBook) => (
      <CategoryBookListItem book={myBook} />
  ));
  return (
    <div className="book-content">
      <h3 className="book-main-title">{categoryName}</h3>
      <div className="book-boxes">{bookBoxList}</div>
    </div>
  );
}
