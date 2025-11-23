import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
      <Route path='/Kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
      <Route path="product" element={<Product/>}>
      <Route path=':productId'element={<Product/>}/>
      </Route> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
 <Footer/>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
