import React from "react";

const DatePicker = ({ date, setDate, labelName }) => {
  return (
    <div className="w-100">
      <label>
        {labelName}
      </label>
      <input
        type="date"
        className="date-picker"
        value={date}
        min={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};

export default DatePicker;
