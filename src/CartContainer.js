import CartItems from "./CartItems";
import { useGlobalContext } from "./Context";

const CartContainer = () => {

    const {clearAll,total} = useGlobalContext();
    
    return (
        <main className="container">
        <CartItems/>
        <footer className="cart-total">
            <h3>total</h3>
            <h3 className="total">${total}</h3>
        </footer>
        <button className="clear-all btn" onClick={clearAll}>clear all</button>
        
        
    </main>
    );
}
 
export default CartContainer;