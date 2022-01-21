import { BsFillCartFill } from "react-icons/bs";
import {useGlobalContext} from './Context'
const Navbar = () => {

    const {amount} = useGlobalContext();
    return (
    <nav className="navbar">
        <div className="logo">
            <h1>Shopping Cart</h1>
        </div>
        <div className="cart-amout">
            <BsFillCartFill/>
            <p className="amout">{amount}</p>
        </div>
    </nav>
    );
}
 
export default Navbar;