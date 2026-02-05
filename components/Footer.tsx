
import React from 'react';
import { SITE_CONFIG, PAGES } from '../constants';

interface FooterProps {
  currentPageId: string;
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPageId, onNavigate }) => {
  const currentIndex = SITE_CONFIG.navigationOrder.indexOf(currentPageId);
  const prevId = currentIndex > 0 ? SITE_CONFIG.navigationOrder[currentIndex - 1] : null;
  const nextId = currentIndex < SITE_CONFIG.navigationOrder.length - 1 ? SITE_CONFIG.navigationOrder[currentIndex + 1] : null;

  return (
    <footer className="mt-32">
      {/* Chapter Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-t-2 border-black pt-12">
        {prevId ? (
          <button 
            onClick={() => onNavigate(prevId)}
            className="paper-button px-8 py-5 flex items-center gap-4 text-black font-bold uppercase tracking-widest text-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
        ) : <div className="hidden md:block" />}

        {nextId ? (
          <button 
            onClick={() => onNavigate(nextId)}
            className="paper-button px-8 py-5 flex items-center gap-4 text-black font-bold uppercase tracking-widest text-xs bg-black !text-white"
          >
            Next File
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : <div className="hidden md:block" />}
      </nav>

      {/* Global Archive Links & Branding */}
      <div className="border-t border-black/10 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p>© 2025 Women · Life · Freedom</p>
          <p className="opacity-40 italic">Historical Archives & Human Rights Project</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <button onClick={() => onNavigate('chronology')} className="hover:text-black hover:underline cursor-pointer">Chronology</button>
          <button onClick={() => onNavigate('voices')} className="hover:text-black hover:underline cursor-pointer">Testimony</button>
          <button onClick={() => onNavigate('support-texas')} className="hover:text-black hover:underline cursor-pointer">Diaspora</button>
          <a href="#" className="hover:text-black hover:underline">Reference Index</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
