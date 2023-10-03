import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='flex items-center py-2 px-20 justify-between shadow shadow-sky-500'>
      <div>
        <NavLink to="/" className='text-3xl font-extrabold text-blue-600'>HotelComm</NavLink>
      </div>
      <nav>
        <ul className='flex items-center py-3 gap-10 text-lg font-bold tracking-wider'>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-sky-700 transition ease-in-out duration-100" : "")}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-sky-700 transition ease-in-out duration-100" : "")}
              to='/properties'
            >
              Property
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
