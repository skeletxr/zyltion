import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const TopBar = () => (
  <header className="font-sans text-[12px] w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-4 sm:py-5 flex justify-between items-center bg-transparent text-black h-auto sm:h-[84px] box-border transition-all z-50 relative mt-2 sm:mt-4">
    <Link to="/">
      <img src="/AltoScripLabs-logo.png" alt="AltoScript Logo" className="h-10 sm:h-20 w-auto object-contain " />
    </Link>
    <div className="flex items-center gap-6">
      <div className="hidden sm:flex items-center gap-2 cursor-pointer">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="font-['Inter'] text-[15px] tracking-[-0.3px] leading-[24px] text-black block">available for work</span>
      </div>
      <div className="flex items-center">
        <div className="w-px h-6 bg-black/15"></div>
        <a href="#" className="p-3 text-black hover:opacity-70 transition-opacity">
          <Instagram className="h-6 w-6" />
        </a>
        <div className="w-px h-6 bg-black/15"></div>
        <a href="#" className="p-3 text-black hover:opacity-70 transition-opacity">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </a>
        <div className="w-px h-6 bg-black/15"></div>
        <a href="#" className="p-3 text-black hover:opacity-70 transition-opacity">
          <Facebook className="h-6 w-6" />
        </a>
        <div className="w-px h-6 bg-black/15"></div>
      </div>
    </div>
  </header>
);

export default TopBar;
