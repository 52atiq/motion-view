import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './components/Home/Home';
import Navbar from './shared/Navbar';



function App() {
  return (
    <div className="mx-auto">
    <Navbar></Navbar>
   

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    <Route path='login' element={<Login></Login>}></Route>
    <Route path='signup' element={<SignUp></SignUp>}></Route>
    </Routes>

   
    
     
    
    </div>
  );
}

export default App;
