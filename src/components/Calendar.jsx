import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Calendar = ({ currentMonth, currentYear }) => {
  const [days, setDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [currentYearIndex, setCurrentYearIndex] = useState(
    new Date().getFullYear()
  );

  useEffect(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayName = dayNames[(firstDay + i - 1) % 7];
      dates.push({ date: i, dayName });
    }
    setDays(dates);

    setCurrentDay(new Date().getDate());
    setCurrentMonthIndex(new Date().getMonth());
    setCurrentYearIndex(new Date().getFullYear());
  }, [currentMonth, currentYear]);

  return (
    <div className="flex">
      {days.map((day) => (
        <div
          key={day.date}
          className={`p-2 border ${
            day.date === currentDay &&
            currentMonth === currentMonthIndex &&
            currentYear === currentYearIndex
              ? "text-white bg-blue-600 font-semibold border rounded-full"
              : ""
          }`}
        >
          <div className="flex gap-2 justify-center px-1">
            <div> {day.date} </div>
            <div> {day.dayName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

Calendar.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  currentYear: PropTypes.number.isRequired,
};

export default Calendar;
