import PropTypes from "prop-types";

const Header = ({ currentMonth, currentYear, onPrevMonth, onNextMonth }) => {
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
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <div className="text-blue-600 font-semibold">
        <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
      </div>
      <div className="flex gap-2 text-blue-600 font-semibold">
        <button onClick={onPrevMonth}>{"<"}</button>
        <h1>Today</h1>
        <button onClick={onNextMonth}>{">"}</button>
      </div>
    </div>
  );
};

Header.propTypes = {
    currentMonth: PropTypes.number.isRequired,
    currentYear: PropTypes.number.isRequired,
    onPrevMonth: PropTypes.func.isRequired,
    onNextMonth: PropTypes.func.isRequired,
  };

export default Header;
