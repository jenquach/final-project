import React, { useState } from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import addMonths from "@jsbits/add-months"
import PickupModal from "./Modal"

import "../assets/react-datepicker.css"

const BookPickup = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const formattedDate = moment(selectedDate).format('YYYY-MM-DD')
  const onChange = (date) => { setSelectedDate(date) }

  return (
    <div>
      <h3>Book a pickup!</h3>
      <DatePicker
        value={formattedDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 1)}
        showDisabledMonthNavigation
      />
      <PickupModal formattedDate={formattedDate} />
    </div>
  )
}

export default BookPickup