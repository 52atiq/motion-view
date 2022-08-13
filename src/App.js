import { Route, Routes } from 'react-router-dom';
import './App.css';

import Products from './components/Products/Products';

import BannerSlider from './components/slider/BannerSlider';

import Navbar from './shared/Navbar';



function App() {
  return (
    <div className="mx-auto">
    <Navbar></Navbar>
    <BannerSlider></BannerSlider>
   
    <Products></Products>

    <Routes>
    {/* <Route path='product-is-here-caught-me' element={}></Route> */}
    </Routes>

   
    
     
    
    </div>
  );
}

export default App;
