import React from 'react';
import axios from 'axios';
import './Calendar.css';

const daysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (year: number, month: number): (string | number)[][] => {
  const weeks: (string | number)[][] = [];
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const totalDays = daysInMonth(year, month);
  let day = 1;

  for (let week = 0; week < 6; week++) {
    const daysOfWeek: (string | number)[] = [];
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if ((week === 0 && dayOfWeek < firstDayOfMonth) || day > totalDays) {
        daysOfWeek.push('');
      } else {
        daysOfWeek.push(day++);
      }
    }
    weeks.push(daysOfWeek);
  }

  return weeks;
};

const Calendar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const weeks = generateCalendar(currentYear, currentMonth);

  const handleDateClick = async (date: number) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/date-clicked', { date });
      console.log(response.data.message);
    } catch (error) {
      console.error("There was an error clicking the date!", error);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="header">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        {weeks.map((week, i) => (
          <div key={i} className="week">
            {week.map((day, j) => (
              <div key={j} className="day" onClick={() => day && handleDateClick(day as number)}>
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
