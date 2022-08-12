import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav>
      {/* top Navbar it Only show  large screen */}
      <div className="mx-20 p-5 md:flex hidden items-center justify-between">
        <div className="md:ml-10 border-b border-gray-500 py-2 flex justify-center items-center">
        <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Products"
          ></input>
          <div className="text-2xl text-gray-400">
            <ion-icon name="search-outline"></ion-icon>
          </div>

        </div>
        
      </div>
            
        </nav>
    );
};

export default Navbar;