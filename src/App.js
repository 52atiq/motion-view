import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import RequireAuth from './Auth/RequireAuth';
import SignUp from './Auth/SignUp';
import Home from './components/Home/Home';
import Checkout from './components/Products/Checkout';
import ProductDetails from './components/Products/ProductDetails';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';



function App() {
  return (
    <div className="mx-auto">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    <Route path='login' element={<Login></Login>}></Route>
    <Route path='signup' element={<SignUp></SignUp>}></Route>
    <Route path='/purchase/:purchaseId' element={<ProductDetails></ProductDetails>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>

    <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
         }></Route>
    </Routes>
    <Footer></Footer>

   
    
     
    
    </div>
  );
}

export default App;
