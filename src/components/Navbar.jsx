import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaGithub, FaBook } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="backdrop-blur-sm bg-black/50 border-b border-[#FF9933]/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[#FF9933] font-bold text-xl hover:text-[#FF9933]/80 transition-colors duration-300">
            Paj33tooor
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/agents"
              className={`text-white hover:text-[#FF9933] transition-colors duration-300 ${
                location.pathname === '/agents' ? 'text-[#FF9933]' : ''
              }`}
            >
              Agents
            </Link>
            <a
              href="https://x.com/pajeet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF9933] transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://paj33tooor-exe.gitbook.io/paj33tooor-gitbook/key-functions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF9933] transition-colors duration-300"
            >
              <FaBook className="text-2xl" />
            </a>
            <a
              href="https://github.com/pajeetoor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF9933] transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
