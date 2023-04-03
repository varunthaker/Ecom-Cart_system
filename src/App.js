import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShopContextProvider } from './context/shop-context.jsx';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart.jsx'
import Shop from './pages/shop/Shop.jsx'
import Checkout from './pages/checkout/Checkout';



function App() {
  return (
    
    <div className = 'App'>

    <ShopContextProvider>
      <Router>

      <Navbar />

      <Routes>

      <Route path = '/' element = {<Shop />}></Route>
      <Route path='/cart' element = {<Cart />}></Route>
      <Route path = '/checkout' element = {<Checkout />}> </Route>

      </Routes>
      </Router>

    </ShopContextProvider>
    </div>
  );
}

export default App;
