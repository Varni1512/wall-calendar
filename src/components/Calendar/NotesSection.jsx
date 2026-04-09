import React from 'react';

const NotesSection = ({ notes, onNotesChange }) => {
  return (
    <div className="w-full md:w-[35%] flex flex-col pt-0">
      <h3 className="text-xs font-extrabold text-[#111] mb-6 tracking-wider uppercase opacity-80">Notes</h3>
      <textarea
        value={notes}
        onChange={(e) => onNotesChange(e)}
        placeholder=""
        className="w-full flex-grow min-h-[300px] resize-none outline-none bg-transparent text-gray-800 text-sm md:text-base selection:bg-blue-100 placeholder:opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 33px, #e5e7eb 33px, #e5e7eb 34px)',
          lineHeight: '34px',
        }}
      />
    </div>
  );
};

export default NotesSection;
