import { BookItem } from "../types";
import { getSlug, bookImagePrefix } from "../utils";
import { useCart } from '../contexts/CartContext';
import "./CategoryBookListItem.css";

export default function CategoryBookListItem(props: { book: BookItem }) {
  const bookImageFileName = `${getSlug(props.book.title)}.gif`;
  const { dispatch } = useCart();
  const handleAddToCart = () => {
    dispatch({ type: 'ADD_BOOK', book: props.book });
  };

  return (
    <div className="book-box">
      <div className="book-image-and-info">
        <div className="book-image">
          <img src={`${bookImagePrefix}${bookImageFileName}`} alt={props.book.title}/>
          {props.book.isPublic && (
          <div className="read-now-button">Read Now</div>
          )}
        </div>
        <div className="book-info">
          <div className="book-title">{props.book.title}</div>
          <div className="book-author">{props.book.author}</div>
          <div className="book-price">${(props.book.price / 100).toFixed(2)}</div>
        </div>
        <div className="buy-now-button-container">
            <button className="buy-now-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
}
