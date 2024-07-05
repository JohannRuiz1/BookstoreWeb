import "./CartTable.css";
import { bookImagePrefix, getSlug } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { BookItem, ShoppingCartItem } from "../types";
import { useCart } from '../contexts/CartContext';

function CartTable() {
  const { dispatch, cart } = useCart();

  const handleIncrement = (cartItem: ShoppingCartItem) => {
    dispatch({ type: 'UPDATE_QUANTITY', book: cartItem.book, quantity: cartItem.quantity + 1});
  };

  const handleDecrement = (cartItem: ShoppingCartItem) => {
    dispatch({ type: 'UPDATE_QUANTITY', book: cartItem.book, quantity: cartItem.quantity - 1});
  };

  const cartBookImage = (book: BookItem) => (
    <div className="cart-book-image">
      <img
        className="cart"
        src={`${bookImagePrefix}${getSlug(book.title)}.gif`}
        alt={book.title}
      />
    </div>
  );
  
  const cartBookQuantity = (cartItem: ShoppingCartItem) => (
    <div className="cart-book-quantity">
      <button className="icon-button dec-arrow-button">
        <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleDecrement(cartItem)}/>
      </button>
      <span className="quantity">&nbsp;&nbsp;{cartItem.quantity}&nbsp;&nbsp;</span>
      <button className="icon-button inc-arrow-button">
        <FontAwesomeIcon icon={faChevronRight} onClick={() => handleIncrement(cartItem)}/>
      </button>
    </div>
  );
  
  const cartTableRows = cart.items.map((item, index) => (
    <li className="grid-table-row" key={index}>
      <div className="grid-book-row">
        <div className="cart-book-image">
          {cartBookImage(item.book)}
        </div>
        <div className="cart-book-title">{item.book.title}</div>
        <div className="cart-book-price">${(item.book.price / 100).toFixed(2)}</div>
        <div className="cart-book-quantity">
          {cartBookQuantity(item)}
        </div>
        <div className="cart-book-subtotal">
          ${(item.book.price * item.quantity/ 100).toFixed(2)}
        </div>
      </div>
      <div className="line-sep"></div>
    </li>
  ));

  return (
    <div className="cart-table">
      <ul className="cart">
        <li className="table-heading">
          <div className="heading-book">Book</div>
          <div className="heading-price">Price / Quantity</div>
          <div className="heading-subtotal">Amount</div>
        </li>
        {cartTableRows}
      </ul>
    </div>
  );
}

export default CartTable;
