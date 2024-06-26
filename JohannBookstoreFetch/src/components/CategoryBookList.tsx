// import types
import "./CategoryBookList.css";
import CategoryBookListItem from "./CategoryBookLIstItem";
import { BookProps } from "../types";



export default function CategoryBookList(props: BookProps) {
  const bookBoxList = props.books.map((myBook) => (
      <CategoryBookListItem book={myBook} />
  ));
  return <div className="book-boxes">{bookBoxList}</div>;
}
