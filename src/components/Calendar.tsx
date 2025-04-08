const Calendar = () => {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const months = [
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
  const date = new Date();
  return (
    <div>
      <div className="calendar-header">
        <h2>
          {months[date.getMonth()]} {date.getFullYear()}
        </h2>
      </div>
      <div className="calendar-table-header">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-table"></div>
    </div>
  );
};

export default Calendar;
