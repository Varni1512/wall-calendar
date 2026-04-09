import React from 'react';

const DayCell = ({ 
  dayObj, 
  isSelected, 
  inRange, 
  isWeekend, 
  themeColor, 
  onDateClick, 
  onMouseEnter 
}) => {
  let cellClass = "w-8 h-8 md:w-10 md:h-10 mx-auto flex items-center justify-center text-sm cursor-pointer transition-all duration-200 ";
  let cellStyle = {};

  if (isSelected) {
    cellClass += "text-white font-bold rounded-full shadow-md z-20";
    cellStyle = { backgroundColor: themeColor };
  } else if (inRange) {
    cellClass += "font-medium z-10";
    cellStyle = { backgroundColor: `${themeColor}22`, color: themeColor };
  } else if (isWeekend && dayObj.isCurrentMonth) {
    cellClass += "font-semibold";
    cellStyle = { color: "#0EA5E9" };
  } else if (!dayObj.isCurrentMonth) {
    cellClass += "text-gray-700 font-semibold hover:bg-gray-100 rounded-full";
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onMouseEnter(dayObj.date)}
    >
      {inRange && (
        <div 
          className="absolute top-0 left-[-50%] w-[200%] h-full -z-10"
          style={{ backgroundColor: `${themeColor}22` }}
        ></div>
      )}
      <div
        className={cellClass}
        style={cellStyle}
        onClick={() => onDateClick(dayObj.date)}
      >
        {dayObj.date.getDate()}
      </div>
    </div>
  );
};

export default DayCell;
