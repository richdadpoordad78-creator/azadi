
import React, { useState } from 'react';
import { SITE_CONFIG, PAGES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeId: string;
  onNavigate: (id: string) => void;
  onScroll?: (scrollTop: number) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeId, onNavigate, onScroll }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f7f2] selection:bg-red-200">
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full z-[110] px-6 py-4 flex justify-between items-center bg-white border-b-2 border-black">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold serif tracking-tight text-black">{SITE_CONFIG.title}</h1>
          <span className="text-[9px] uppercase tracking-[0.3em] text-red-700 font-black">{SITE_CONFIG.subtitle}</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="w-12 h-12 flex items-center justify-center border-2 border-black bg-white active:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 w-80 bg-[#f8f7f2] z-[120] transform transition-transform duration-300 md:relative md:translate-x-0 flex flex-col border-r-2 border-black
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 h-full flex flex-col overflow-y-auto">
          <div className="mb-12 cursor-pointer group" onClick={() => onNavigate('landing')}>
            <h1 className="text-2xl font-bold serif leading-none mb-2 text-black group-hover:underline">
              {SITE_CONFIG.title}
            </h1>
            <p className="text-[10px] text-red-700 tracking-[0.4em] font-black uppercase flex items-center gap-3">
              <span className="h-[2px] w-4 bg-red-700"></span>
              {SITE_CONFIG.subtitle}
            </p>
          </div>

          <nav className="flex-1 space-y-px">
            {SITE_CONFIG.navigationOrder.map((navId, idx) => {
              const page = PAGES.find(p => p.id === navId);
              if (!page) return null;
              const isActive = activeId === navId;
              
              return (
                <button
                  key={navId}
                  onClick={() => {
                    onNavigate(navId);
                    setIsSidebarOpen(false);
                  }}
                  className={`
                    w-full text-left px-5 py-4 flex items-center gap-4 transition-all duration-75 group border border-transparent
                    ${isActive 
                      ? 'bg-white border-2 border-black -translate-x-1 -translate-y-1 shadow-[4px_4px_0px_black] z-10 font-bold' 
                      : 'text-gray-500 hover:text-black hover:bg-gray-200/50'}
                  `}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-red-700' : 'text-gray-400'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest flex-1">
                    {page.title}
                  </span>
                  {isActive && <div className="w-2 h-2 bg-red-700"></div>}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 border-t border-black/10">
            <div className="bg-gray-100 p-4 mb-6 border border-black/10">
              <p className="text-[8px] text-gray-500 uppercase tracking-[0.2em] font-black mb-1 italic">Index Location</p>
              <p className="text-[10px] font-bold text-black uppercase tracking-tight">
                {PAGES.find(p => p.id === activeId)?.title}
              </p>
            </div>
            <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-widest font-medium">
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main 
        className="flex-1 overflow-y-auto mt-20 md:mt-0 flex flex-col relative h-screen p-4 md:p-10 lg:p-14"
        onScroll={(e) => onScroll?.(e.currentTarget.scrollTop)}
      >
        <div className="max-w-4xl mx-auto w-full flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
