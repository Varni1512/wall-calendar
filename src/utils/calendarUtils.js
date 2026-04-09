export const monthThemes = [
  "#1E88E5", // Jan - Blue 
  "#E53935", // Feb - Red
  "#43A047", // Mar - Green
  "#FDD835", // Apr - Yellow
  "#8E24AA", // May - Purple
  "#00ACC1", // Jun - Cyan
  "#FFB300", // Jul - Amber
  "#F4511E", // Aug - Deep Orange
  "#3949AB", // Sep - Indigo
  "#D81B60", // Oct - Pink
  "#6D4C41", // Nov - Brown
  "#546E7A"  // Dec - Blue Grey
];

export const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  // Adjust so Monday is 0, Sunday is 6
  return day === 0 ? 6 : day - 1;
};

export const generateCalendarDays = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const startOffset = getFirstDayOfMonth(year, month);
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const days = [];

  // Previous month days
  for (let i = startOffset - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false });
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), isCurrentMonth: true });
  }
  
  // Next month days to fill 6 weeks (42 days)
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
  }
  
  return days;
};

export const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
