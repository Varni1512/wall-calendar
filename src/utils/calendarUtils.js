export const monthThemes = [
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

export const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

export const generateCalendarDays = (currentDate) => {
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

export const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
