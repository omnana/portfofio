import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_543)">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </g>
              <defs><clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white uppercase">GD Portfolio</h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-sm font-medium transition-colors text-white underline decoration-primary underline-offset-4'
                : 'text-sm font-medium hover:text-primary transition-colors text-white/70'
            }
            to="/"
          >
            Home
          </NavLink>
          <a
            className="text-sm font-medium hover:text-primary transition-colors text-white/70"
            href="/#projects"
          >
            Projects
          </a>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-sm font-medium transition-colors text-white underline decoration-primary underline-offset-4'
                : 'text-sm font-medium hover:text-primary transition-colors text-white/70'
            }
            to="/about"
          >
            About
          </NavLink>
          <a
            className="text-sm font-medium hover:text-primary transition-colors text-white/70"
            href="/#contact"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            to="/#contact"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
