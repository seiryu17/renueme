import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import renuelogo from "../assets/renue_logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white relative">
      <img src={renuelogo} alt="Renue Logo" className="h-10" />

      <nav className="hidden md:flex flex-1 justify-center space-x-6 font-bold">
        <a href="#" className="text-gray-700 hover:underline">
          Thrift with us
        </a>
        <a href="#" className="text-gray-700 hover:underline">
          Donate
        </a>
        <a href="#" className="text-gray-700 hover:underline">
          Impact
        </a>
        <a href="#" className="text-gray-700 hover:underline">
          Get involved
        </a>
        <a href="#" className="text-gray-700 hover:underline">
          About us
        </a>
        <a href="#" className="text-gray-700 hover:underline">
          Contact
        </a>
      </nav>

      <button
        className="md:hidden p-2 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 z-50">
          <a href="#" className="text-gray-700 font-bold hover:underline">
            Thrift with us
          </a>
          <a href="#" className="text-gray-700 font-bold hover:underline">
            Donate
          </a>
          <a href="#" className="text-gray-700 font-bold hover:underline">
            Impact
          </a>
          <a href="#" className="text-gray-700 font-bold hover:underline">
            Get involved
          </a>
          <a href="#" className="text-gray-700 font-bold hover:underline">
            About us
          </a>
          <a href="#" className="text-gray-700 font-bold hover:underline">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
