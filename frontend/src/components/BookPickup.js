import React, { useState } from "react"
import MomentUtils from "@date-io/moment"
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "@material-ui/pickers"

const BookPickup = () => {
  const [date, setDate] = useState(null)

  return (
    <>
    <h3>Book a pickup!</h3>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        placeholder="YYYY/MM/DD"
        format={"YYYY/MM/DD"}
        mask={[]}
        value={date}
        disableOpenOnEnter
        animateYearScrolling={false}
        autoOk={true}
        clearable
        onChange={setDate}
      />
    </MuiPickersUtilsProvider>
    </>
 
  )
}

export default BookPickup