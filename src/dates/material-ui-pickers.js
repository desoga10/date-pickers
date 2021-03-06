// import React, { useState } from "react";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   DatePicker,
//   TimePicker,
//   DateTimePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";

// const MaterialUIPickers = () => {

//   const [selectedDate, handleDateChange] = useState(new Date());


//   const dateChangeValue = (date) => {
//     handleDateChange(date)
//     const dateValue = date
//     console.log(dateValue)
//   }


//   return (
//     <div>
//       <h2>MaterialUIPickers</h2>
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <DatePicker variant="static" value={selectedDate} onChange={dateChangeValue} />
//         <TimePicker value={selectedDate} onChange={dateChangeValue} />
//         <DateTimePicker value={selectedDate} onChange={dateChangeValue} />
//       </MuiPickersUtilsProvider>
//     </div>
//   );
// };

// export default MaterialUIPickers;
