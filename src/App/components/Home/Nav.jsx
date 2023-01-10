import React, { useState } from "react";
import Logo from "../Home/assets/pre-logo.png";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex  flex-row justify-between items-center h-24  mx-auto px-8 text-[#B124A3]">
      <div>
      <div className="md:flex" >
     
        <img className="w-16 h-8 " src={Logo} alt="" />
        <div><h1 className="text-3xl font-bold text-[#B124A3]">KinderJoy.</h1></div>
        
      </div>
      <div>
        <h2 class="w-full text-xs font-medium title-font text-[#B124A3] tracking-widest title-font mb-1">
          Kindergarten Management Portal
        </h2>
      </div>
</div>
      

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Login</li>
        <li className="p-4">Register</li>
        <li className="p-4">Contacts</li>
      </ul>
      {/* <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#B124A3] m-4'>KinderJoy.</h1>
          <li className='p-4 border-b '>Home</li>
          <li className='p-4 border-b '>Login</li>
          <li className='p-4 border-b '>Register</li>
          <li className='p-4 border-b '>Help</li>
          
      </ul> */}
    </div>
  );
};

export default Navbar;