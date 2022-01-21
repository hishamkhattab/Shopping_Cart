import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import {useGlobalContext} from './Context';

function App() {
  
  const {loading,error,errorMsg,cart} = useGlobalContext();

  let msg = ''

  if (loading) {
    msg = 'Loading...';
  } else if (error) {
    msg = errorMsg;
  } else if (cart.length === 0) {
    msg = 'There is nothing here';
  } else {
    msg = 'Shopping Cart'
  }

  return (
    <div className="App">
    <Navbar/>
    <h1 className="msg">{msg}</h1>
    {!loading && !error && <CartContainer/>}
    </div>
  );
}

export default App;
