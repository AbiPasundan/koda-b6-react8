import React, { useState } from 'react';
import { Link } from "react-router";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Logo</div>
        
        <div className="hidden md:flex space-x-4">
          <Link to="/" href="#" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" href="#" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/login" href="#" className="text-gray-300 hover:text-white">Login</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            Menu
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" href="#" className="block text-gray-300 hover:text-white py-1">Home</Link>
          <Link to="/" href="#" className="block text-gray-300 hover:text-white py-1">About</Link>
          <Link to="/login" href="#" className="block text-gray-300 hover:text-white py-1">Login</Link>
        </div>
      )}
    </nav>
    )
}