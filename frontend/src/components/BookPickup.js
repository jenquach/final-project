import React, { useState } from "react"
import MomentUtils from "@date-io/moment"
import { alpha } from '@material-ui/core/styles'
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "@material-ui/pickers"

const BookPickup = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const onChange = (date) => {setSelectedDate(date)}

  return (
    <>
    <h3>Book a pickup!</h3>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        placeholder="YYYY/MM/DD"
        format={"YYYY/MM/DD"}
        value={selectedDate}
        animateYearScrolling={false}
        autoOk={true}
        onChange = {onChange}
      />
      {/* <TimePicker
        placeholder="HH:MM"
        margin="normal"
        value={selectedDate}
        onChange={onChange}
      /> */}
      {/* <button onClick = {() => setSelectedDate()}>Confirm</button> */}
      <p>{JSON.stringify(selectedDate)}</p>
    </MuiPickersUtilsProvider>
    </>
 
  )
}

export default BookPickup