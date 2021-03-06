import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const ReactDatePicker = () => {

    const  [startDate, setStartDate] = useState(new Date())

    const getDateValue = (date) => {
      setStartDate(date)
      console.log(date)
    }

  return (
    <div>
      <h2>React Date Picker</h2>
        <DatePicker selected={startDate} onChange={getDateValue} />
    </div>
  )
}

export default ReactDatePicker
