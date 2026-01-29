import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <div className="text-primary size-6">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-white uppercase">Alex Vance</h2>
        </div>
        <div className="flex items-center gap-8">
          <a className="text-white/40 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a className="text-white/40 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">code</span>
          </a>
          <a className="text-white/40 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>
        <p className="text-white/40 text-sm">© 2024 Alex Vance. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
