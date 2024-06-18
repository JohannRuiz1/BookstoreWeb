// import types

import { useParams } from "react-router-dom";
import { getBooksForCategory } from "../data";
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookLIstItem";
import { BookItem } from "../types";
export default function CategoryBookList() {
  const { categoryName } = useParams();
  console.log("category name inside book list component");
  console.log(categoryName);
  const bookList: BookItem[] = getBooksForCategory(categoryName as string);
  console.log("book list inside book list component");
  console.log(bookList);

  const bookBoxList = bookList.map((myBook) => (
      <CategoryBookListItem book={myBook} />
  ));
  return <div className="book-boxes">{bookBoxList}</div>;
}
