import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const monthThemes = [
  "#1E88E5",
  "#E53935",
  "#43A047",
  "#FDD835",
  "#8E24AA",
  "#00ACC1",
  "#FFB300",
  "#F4511E",
  "#3949AB",
  "#D81B60",
  "#6D4C41",
  "#546E7A"
];

const InteractiveCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2022, 0, 1));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [notes, setNotes] = useState("");

  const themeColor = monthThemes[currentDate.getMonth()];

  useEffect(() => {
    const savedNotes = localStorage.getItem(`calendar_notes_${currentDate.getMonth()}_${currentDate.getFullYear()}`);
    if (savedNotes) setNotes(savedNotes);
    else setNotes("");
  }, [currentDate]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem(`calendar_notes_${currentDate.getMonth()}_${currentDate.getFullYear()}`, e.target.value);
  };

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startOffset = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];

    for (let i = startOffset - 1; i >= 0; i--) {
      days.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    return days;
  };

  const handleMonthChange = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const handleDateClick = (clickedDate) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (clickedDate < startDate) {
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    }
  };

  const isDateSelected = (date) => {
    return (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime());
  };

  const isDateInRange = (date) => {
    if (startDate && endDate) {
      return date > startDate && date < endDate;
    }
    if (startDate && hoverDate && !endDate) {
      const start = startDate < hoverDate ? startDate : hoverDate;
      const end = startDate < hoverDate ? hoverDate : startDate;
      return date > start && date < end;
    }
    return false;
  };

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center p-4 pt-16 md:p-10 md:pt-20 font-sans">

      <div className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-visible">


        <div className="absolute -top-6 left-0 w-full flex justify-evenly px-6 z-30 pointer-events-none">
          {Array.from({ length: 42 }).map((_, i) => {
            if (i >= 19 && i <= 22) return <div key={i} className="w-3" />;
            return (
              <svg key={i} width="14" height="30" viewBox="0 0 14 30" className="drop-shadow-md">
                <rect x="1" y="18" width="12" height="8" rx="4" fill="#111" />
                <rect x="3" y="4" width="2.5" height="20" rx="1" fill="#d1d5db" />
                <rect x="8.5" y="4" width="2.5" height="20" rx="1" fill="#d1d5db" />
                <path d="M 4 4 Q 7 -2 10 4" stroke="#d1d5db" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 4 4 Q 7 -2 10 4" stroke="#9ca3af" strokeWidth="1" fill="none" strokeLinecap="round" />
              </svg>
            );
          })}
        </div>


        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none drop-shadow-lg">
          <svg width="100" height="50" viewBox="0 0 100 50">
            <path d="M 0 42 C 25 42, 35 42, 40 25 C 43 12, 47 12, 50 25 C 55 42, 65 42, 100 42" stroke="#222" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="45" cy="10" r="5" fill="none" stroke="#222" strokeWidth="3" />
          </svg>
        </div>


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
                L 15,75 
                L 45,95 
                Q 50,97 53,94 
                L 100,55 
                L 100,100 Z"
                fill="#ffffff"
              />

              <polygon
                points="0,65 15,75 0,90"
                fill={themeColor}
                className="opacity-90"
              />

              <path
                d="M 58,90 
                L 101,40 
                L 105,80
                L 82,100
                Q 80,100 50,98 
                L 53,94 Z"
                fill={themeColor}
              />
            </svg>


            <div className="absolute bottom-[10%] right-[6%] md:right-[6%] z-20 flex flex-col items-end text-white text-right">
              <div className="flex items-center gap-2 mb-0.5">
                <button onClick={() => handleMonthChange(-1)} className="text-white">
                  <ChevronLeft size={24} strokeWidth={3} />
                </button>

                <div className="text-sm md:text-3xl font-medium tracking-widest">
                  {currentDate.getFullYear()}
                </div>

                <button onClick={() => handleMonthChange(1)} className="text-white">
                  <ChevronRight size={24} strokeWidth={3} />
                </button>
              </div>

              <div className="text-xl md:text-4xl font-extrabold tracking-widest uppercase italic">
                {currentDate.toLocaleString('default', { month: 'long' })}
              </div>
            </div>

          </div>
        </div>


        <div className="flex flex-col md:flex-row w-full bg-white p-6 md:p-10 gap-8 md:gap-16 rounded-b-xl relative z-20 -mt-1">
          <div className="w-full md:w-[35%] flex flex-col pt-2">
            <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-wide uppercase">Notes</h3>
            <textarea
              value={notes}
              onChange={handleNotesChange}
              className="w-full flex-grow min-h-[220px] resize-none outline-none bg-transparent text-gray-700 text-sm md:text-base"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #d1d5db 31px, #d1d5db 32px)',
                lineHeight: '32px',
              }}
            />
          </div>

          <div className="w-full md:w-[65%]">
            <div className="grid grid-cols-7 gap-1 mb-4 text-center">
              {daysOfWeek.map((day, idx) => (
                <div
                  key={day}
                  className="text-xs font-bold mb-2 tracking-wide"
                  style={{ color: (idx === 5 || idx === 6) ? themeColor : '#4B5563', transition: 'color 0.5s ease' }}
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

                let cellClass = "w-8 h-8 md:w-10 md:h-10 mx-auto flex items-center justify-center text-sm cursor-pointer transition-all duration-200 ";
                let cellStyle = {};

                if (isSelected) {
                  cellClass += "text-white font-bold rounded-full shadow-md z-20";
                  cellStyle = { backgroundColor: themeColor };
                } else if (inRange) {
                  cellClass += "font-medium z-10";
                  cellStyle = { backgroundColor: `${themeColor}22`, color: themeColor };
                } else if (!dayObj.isCurrentMonth) {
                  cellClass += "text-gray-300";
                } else if (isWeekend) {
                  cellClass += "font-semibold";
                  cellStyle = { color: themeColor };
                } else {
                  cellClass += "text-gray-700 font-semibold hover:bg-gray-100 rounded-full";
                }

                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setHoverDate(dayObj.date)}
                  >
                    {inRange && (
                      <div className="absolute top-0 left-[-50%] w-[200%] h-full -z-10"
                        style={{ backgroundColor: `${themeColor}22` }}></div>
                    )}
                    <div
                      className={cellClass}
                      style={cellStyle}
                      onClick={() => handleDateClick(dayObj.date)}
                    >
                      {dayObj.date.getDate()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCalendar;