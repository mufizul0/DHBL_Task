import React from 'react';

const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <header className="p-4 bg-gray-100 text-gray-800">
        <div className="flex justify-between">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <span className="text-[#eab308]">FABRIC</span> &nbsp; <span className="text-[#3b7c46]">COLOR</span>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-sky-600 border-sky-600">Made to Order</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">catalogue</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Buy Ready Fabrics</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">More</a>
            </li>
          </ul>
          <div className="items-center lg:flex">
            <input className="self-center px-8 py-3 rounded" placeholder="Search"></input>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
