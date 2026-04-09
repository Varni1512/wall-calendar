import React from 'react';

const SpiralHeader = () => {
  return (
    <>
      {/* Top Spirals */}
      <div className="absolute -top-6 left-0 w-full flex justify-between px-8 z-30 pointer-events-none">
        {/* Left Spirals */}
        <div className="flex gap-[6px]">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={`left-${i}`} className="flex flex-col items-center">
              <div className="w-[1.5px] h-4 bg-[#888] rounded-full" />
              <div className="w-3 h-4 border-[1.5px] border-[#333] rounded-t-full -mt-2" />
            </div>
          ))}
        </div>

        {/* Right Spirals */}
        <div className="flex gap-[6px]">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={`right-${i}`} className="flex flex-col items-center">
              <div className="w-[1.5px] h-4 bg-[#888] rounded-full" />
              <div className="w-3 h-4 border-[1.5px] border-[#333] rounded-t-full -mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Central Hanger */}
      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 10 35 L 20 15 L 30 35" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="12" r="3" fill="none" stroke="#222" strokeWidth="2.5" />
        </svg>
      </div>
    </>
  );
};

export default SpiralHeader;
