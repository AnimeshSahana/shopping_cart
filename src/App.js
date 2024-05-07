import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import { Navbar } from './Components/navbar';
import { Shop } from './Pages/shop/shop';
import { Cart } from './Pages/cart/cart';

function App() {
  return (
    <div >

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
