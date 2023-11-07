import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">My App</div>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-blue-200">
              <a href="#">Home</a>
            </li>
            <li className="text-white hover:text-blue-200">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-blue-200">
              <a href="#">Services</a>
            </li>
            <li className="text-white hover:text-blue-200">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
