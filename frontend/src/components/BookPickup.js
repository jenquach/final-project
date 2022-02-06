import React, { useState } from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import addMonths from '@jsbits/add-months'

import "react-datepicker/dist/react-datepicker.css"

const BookPickup = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // const [showModal, setShowModal] = useState(false)

  const formattedDate = moment(selectedDate).format('YYYY-MM-DD')

  const onChange = (date) => {setSelectedDate(date)}

  return (
    <div>
    <h3>Book a pickup!</h3>
      <DatePicker
        format={"YYYY/MM/DD"}
        selected={selectedDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 1)}
        showDisabledMonthNavigation
      />
      <button onClick = {() => setSelectedDate()}>Confirm</button>
      <p>{JSON.stringify(formattedDate)}</p>
    </div>
  )
}

export default BookPickup