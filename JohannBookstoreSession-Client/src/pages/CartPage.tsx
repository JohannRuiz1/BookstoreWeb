import CartTable from "../components/CartTable";
import './CartPage.css'
export default function CartPage() {
return (
    <div className="cart-page">
        <h1 className="cart-title">Basket Full of Books!</h1>
        <CartTable />
    </div>

 );

}