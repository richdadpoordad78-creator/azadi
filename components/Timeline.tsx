
import React from 'react';
import { Event } from '../types';

interface TimelineProps {
  events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative pl-12 py-6">
      {/* Boxy Central Line */}
      <div className="absolute left-4 top-0 bottom-0 w-[4px] bg-black"></div>
      
      <div className="space-y-16">
        {events.map((event, index) => (
          <div key={index} className="relative group">
            {/* Square Node */}
            <div className="absolute left-[-48px] top-4 w-12 h-12 flex items-center justify-center">
              <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center group-hover:bg-red-700 group-hover:border-red-700 transition-colors">
                <div className="w-2 h-2 bg-black group-hover:bg-white"></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
              <span className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-black/10 group-hover:text-black transition-colors duration-300 select-none border-b-2 border-transparent group-hover:border-black">
                {event.year}
              </span>
              <div className="flex-1 pt-2">
                <p className="text-xl md:text-2xl text-black font-bold leading-tight uppercase tracking-tight mb-4">
                  {event.event}
                </p>
                <div className="h-[2px] w-12 bg-red-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
