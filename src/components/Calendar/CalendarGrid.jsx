import React from 'react';
import DayCell from './DayCell';
import { daysOfWeek } from '../../utils/calendarUtils';

const CalendarGrid = ({ 
  calendarDays, 
  themeColor, 
  isDateSelected, 
  isDateInRange, 
  onDateClick, 
  onMouseEnter 
}) => {
  return (
    <div className="w-full md:w-[65%]">

      <div className="grid grid-cols-7 gap-1 mb-4 text-center">
        {daysOfWeek.map((day, idx) => (
          <div
            key={day}
            className="text-[10px] md:text-xs font-bold mb-2 tracking-widest"
            style={{ 
              color: (idx === 5 || idx === 6) ? "#0EA5E9" : "#374151", 
              transition: 'color 0.5s ease' 
            }}
          >
            {day}
          </div>
        ))}
      </div>


      <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center relative z-10">
        {calendarDays.map((dayObj, idx) => {
          const isSelected = isDateSelected(dayObj.date);
          const inRange = isDateInRange(dayObj.date);
          const isWeekend = dayObj.date.getDay() === 0 || dayObj.date.getDay() === 6;

          return (
            <DayCell
              key={idx}
              dayObj={dayObj}
              isSelected={isSelected}
              inRange={inRange}
              isWeekend={isWeekend}
              themeColor={themeColor}
              onDateClick={onDateClick}
              onMouseEnter={onMouseEnter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
