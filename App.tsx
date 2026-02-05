
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { PAGES, SITE_CONFIG } from './constants';

const App: React.FC = () => {
  const [currentPageId, setCurrentPageId] = useState(SITE_CONFIG.navigationOrder[0]);
  const page = PAGES.find(p => p.id === currentPageId);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && SITE_CONFIG.navigationOrder.includes(hash)) {
        setCurrentPageId(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (id: string) => {
    window.location.hash = id;
    setCurrentPageId(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (!page) return null;

  const renderContent = () => {
    if (page.isLanding) {
      return (
        <div className="min-h-[70vh] flex flex-col justify-center items-center text-center page-transition">
          <div className="paper-box p-12 md:p-20 max-w-3xl border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <span className="text-[11px] uppercase tracking-[0.6em] text-red-700 font-black mb-10 block">Documented Movement</span>
            <h1 className="text-7xl md:text-9xl serif font-bold text-black mb-4 tracking-tighter">
              Azadi.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light tracking-[0.3em] uppercase mb-12">
              {SITE_CONFIG.subtitle}
            </p>
            <div className="h-[2px] w-24 bg-black mb-12 mx-auto"></div>
            <p className="text-xl md:text-2xl text-black font-serif leading-relaxed italic mb-16 px-6">
              "{SITE_CONFIG.description}"
            </p>
            <button 
              onClick={() => navigateTo(SITE_CONFIG.navigationOrder[1])}
              className="paper-button px-12 py-5 group inline-flex items-center gap-6 font-bold"
            >
              <span className="text-sm uppercase tracking-[0.4em] text-black">Open File</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="page-transition">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-red-700"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-red-700 font-black">Archive Ref: {page.id.toUpperCase()}</span>
          </div>
          <h2 className="text-5xl md:text-8xl serif font-bold text-black mb-8 leading-none tracking-tight">
            {page.title}
          </h2>
          {page.overview && (
            <div className="paper-inset p-8 border-l-4 border-black mb-12">
               <p className="text-lg md:text-2xl text-black font-serif italic leading-relaxed">
                {page.overview}
              </p>
            </div>
          )}
        </header>

        <div className="space-y-12">
          {page.sections && page.sections.map((section, idx) => (
            <section key={idx} className="paper-box p-8 md:p-14 relative group">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3">
                  <span className="text-red-700 text-6xl font-serif italic block mb-4 opacity-10 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-black tracking-tight leading-tight uppercase font-bold">
                    {section.heading}
                  </h3>
                  <div className="mt-6 h-[4px] w-16 bg-black"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-black leading-[1.8] font-normal border-l border-gray-200 pl-8">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          ))}

          {/* Detailed Chronology Items */}
          {page.chronologyItems && page.chronologyItems.map((item) => (
            <section key={item.id} className="paper-box p-8 md:p-14 relative group border-2 border-black">
              <div className="mb-8 pb-4 border-b border-black flex flex-col md:flex-row justify-between items-baseline gap-4">
                <div>
                  <span className="text-red-700 font-mono text-sm block mb-1">PERIOD: {item.period}</span>
                  <h3 className="text-3xl md:text-4xl serif font-bold text-black uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-gray-300 font-serif italic text-5xl opacity-50">#{item.id}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-gray-300"></span> Summary of Status
                    </h4>
                    <p className="text-xl text-black leading-relaxed font-medium">
                      {item.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-gray-300"></span> Key Documented Events
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {item.keyEvents.map((evt, i) => (
                        <li key={i} className="text-sm font-bold text-black flex items-start gap-2 before:content-['■'] before:text-red-700 before:text-[8px] before:mt-1">
                          {evt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.notableIncidents && (
                    <div className="pt-8 border-t border-black/5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-red-800 mb-6 underline">Notable Incidents & Massacres</h4>
                      <div className="space-y-6">
                        {item.notableIncidents.map((incident, i) => (
                          <div key={i} className="paper-inset p-4 border-l-2 border-red-700">
                            <h5 className="font-black text-sm uppercase text-black mb-1">{incident.name} ({incident.year})</h5>
                            <p className="text-xs text-gray-600 leading-relaxed font-medium">{incident.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  {(item.estimatedDeaths || item.reportedDeathTolls) && (
                    <div className="bg-black text-white p-6 space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/20 pb-2">Casualty Statistics</h4>
                      
                      {item.estimatedDeaths && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold mb-1">Est. Death Range</p>
                          <p className="text-3xl font-black text-red-600 tracking-tighter">{item.estimatedDeaths.range}</p>
                          {item.estimatedDeaths.notes && <p className="text-[9px] mt-2 italic text-gray-400">{item.estimatedDeaths.notes}</p>}
                        </div>
                      )}

                      {item.reportedDeathTolls && (
                        <div className="space-y-4 pt-4 border-t border-white/10">
                          {item.reportedDeathTolls.humanRightsConfirmed && (
                            <div className="flex justify-between items-baseline border-b border-white/5 pb-1">
                              <span className="text-[10px] uppercase font-bold text-gray-400">Confirmed (HR Groups)</span>
                              <span className="text-xl font-bold">{item.reportedDeathTolls.humanRightsConfirmed.toLocaleString()}</span>
                            </div>
                          )}
                          {item.reportedDeathTolls.governmentFigures && (
                            <div className="flex justify-between items-baseline border-b border-white/5 pb-1">
                              <span className="text-[10px] uppercase font-bold text-gray-400">Gov. Figures</span>
                              <span className="text-xl font-bold">{item.reportedDeathTolls.governmentFigures.toLocaleString()}</span>
                            </div>
                          )}
                          {item.reportedDeathTolls.highEndEstimates && (
                            <div className="flex justify-between items-baseline pt-2">
                              <span className="text-[10px] uppercase font-black text-red-500">High-end Estimates</span>
                              <span className="text-2xl font-black text-red-500">{item.reportedDeathTolls.highEndEstimates.toLocaleString()}+</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="paper-inset p-4 text-[9px] text-gray-500 font-mono space-y-2">
                    <p className="uppercase border-b border-black/10 pb-1">Archive Metadata</p>
                    <p>Status: Verified Entry</p>
                    <p>Access: Public Reading</p>
                    <p>Ref: CHRO-{item.id}-{item.period.split('–')[0]}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {page.id === 'timeline' && page.events && (
            <div className="paper-box p-8 md:p-14 border-2 border-black">
              <Timeline events={page.events} />
            </div>
          )}

          {page.id === 'voices' && page.quotes && (
            <div className="space-y-8">
              {page.quotes.map((quote, idx) => (
                <div key={idx} className="paper-box p-12 text-center border-l-8 border-red-700">
                  <p className="text-3xl md:text-5xl font-serif italic text-black mb-8 leading-tight tracking-tight">
                    "{quote.text}"
                  </p>
                  <div className="inline-block px-4 py-2 border border-black bg-gray-50">
                    <cite className="text-black text-[10px] font-black uppercase tracking-[0.4em] not-italic">
                      Witness Statement: {quote.speaker}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          )}

          {page.id === 'support-texas' && page.images && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              {page.images.map((img, idx) => (
                <figure key={idx} className="paper-box overflow-hidden p-4 border-2 border-black group">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-black bg-gray-100">
                    <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-opacity duration-300 opacity-90 group-hover:opacity-100" />
                  </div>
                  <figcaption className="px-2">
                    <h4 className="text-xl serif font-bold text-black mb-1">{img.caption}</h4>
                    <div className="h-[1px] w-full bg-black/10 my-2"></div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black italic">Collection: {img.credit}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          
          {page.note && (
            <div className="paper-inset p-10 mt-20 border-t-4 border-black bg-gray-100">
              <span className="block font-black uppercase tracking-[0.4em] text-[10px] text-black mb-4 underline">Librarian's Note</span>
              <p className="text-lg md:text-xl text-black font-serif italic opacity-80 leading-relaxed">
                "{page.note}"
              </p>
            </div>
          )}
        </div>

        <Footer currentPageId={page.id} onNavigate={navigateTo} />
      </div>
    );
  };

  return (
    <Layout activeId={currentPageId} onNavigate={navigateTo}>
      {renderContent()}
    </Layout>
  );
};

export default App;
