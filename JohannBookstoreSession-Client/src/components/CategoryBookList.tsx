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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiUrl}/categories/name/${categoryName}/books`)
        .then((result) => {
            setBooks(result.data);
            setLoading(false);
          })
        .catch( (error) => {
          console.error
          setError(`Error fetching books: ${error.message}`);
          setLoading(false);
        }
        );
  }, [categoryName]);

  if (loading) {
    return <p>Loading...</p>; // Optional loading indicator
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetch fails
  }

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
