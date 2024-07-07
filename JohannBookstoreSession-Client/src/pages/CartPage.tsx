import { Link } from "react-router-dom";
import CartTable from "../components/CartTable";
import './CartPage.css'
import { useCart } from "../contexts/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useCart();
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Basket Full of Books!</h1>
      {cart.numberOfItems > 0 ? (
        <>
          <CartTable />
          <div className="cart-buttons">
            <Link to="/category/classics" className="no-underline">
              <button className="cart-button">Continue Shopping?</button>
            </Link>
            <button className="cart-button" onClick={clearCart}>Clear Cart</button>
            <Link to="/checkout" className="no-underline">
              <button className="cart-button">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="empty-cart-message">
          <p>Your cart is empty.</p>
          <div className="cart-buttons">
            <Link to="/category/classics" className="no-underline">
              <button className="cart-button">Continue Shopping?</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
