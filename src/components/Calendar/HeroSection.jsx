import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = ({ currentDate, themeColor, onMonthChange }) => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full bg-white overflow-hidden rounded-t-xl">

      <div className="absolute top-0 left-0 w-full h-[400px] md:h-[600px]">

        <img
          src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Mountain Climber"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />


        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        >

          <path
            d="M 0,100 
               L 0,65 
               L 18,74 
               L 38,94 
               Q 42,97 46,92 
               L 100,58 
               L 100,100 Z"
            fill="#ffffff"
          />


          <polygon
            points="0,65 18,74 0,85"
            fill={themeColor}
            className="opacity-90"
          />


          <path
            d="M 38,94 
               L 100,35 
               L 100,55 
               L 80,85 
               Q 75,95 46,92 Z"
            fill={themeColor}
          />
        </svg>


        <div className="absolute bottom-[20%] right-[8%] z-20 flex flex-col items-end text-white text-right">
          <div className="flex items-center gap-3 mb-1">
            <button 
              onClick={() => onMonthChange(-1)} 
              className="text-white hover:scale-120 transition-transform p-1"
              aria-label="Previous Month"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </button>

            <div className="text-2xl md:text-3xl font-medium tracking-wider">
              {currentDate.getFullYear()}
            </div>

            <button 
              onClick={() => onMonthChange(1)} 
              className="text-white hover:scale-120 transition-transform p-1"
              aria-label="Next Month"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>

          <div className="text-3xl md:text-5xl font-black tracking-taller uppercase">
            {currentDate.toLocaleString('default', { month: 'long' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
