import { useState } from "react";

const Header = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <div className="text-blue-600 font-semibold">
          <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
        </div>
        <div className="flex gap-2 text-blue-600 font-semibold">
          <button onClick={handlePrevMonth}>{"<"}</button>
          <h1>Today</h1>
          <button onClick={handleNextMonth}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
