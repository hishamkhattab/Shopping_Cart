import { BsFillCaretUpFill,BsFillCaretDownFill } from "react-icons/bs";
import {useGlobalContext} from './Context'

const CartItems = () => {

    const {cart,clearItem,changeAmout} = useGlobalContext();

    return (
        <section className="items-container">
        {cart.map(item => {
            return (
                <div key={item.id} className="item-wrapper">
                <div className="item-img">
                    <img src={item.img} alt=""/>
                </div>
                <div className="item-info">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-price">${item.price}</p>
                    <button className="btn clear-item" onClick={() => clearItem(item.id)}>remove</button>
                </div>
                <div className="item-qty">
                    <button onClick={() => changeAmout(item.id,'increament')}><BsFillCaretUpFill/></button>
                    <p className="item-quintity">{item.amount}</p>
                    <button onClick={() => changeAmout(item.id,'decreament')}><BsFillCaretDownFill/></button>
                </div>
        </div>
            ) 
        })}
        </section>
    );
}
 
export default CartItems;
