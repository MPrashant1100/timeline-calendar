import React, { useState } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

function App() {
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

  return (
    <React.Fragment>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 bg-white">
          <Header
            currentMonth={currentMonth}
            currentYear={currentYear}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
        </div>
        <div className="pt-14">
          <Calendar currentMonth={currentMonth} currentYear={currentYear} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
