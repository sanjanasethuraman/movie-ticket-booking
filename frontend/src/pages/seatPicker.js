import React from "react";
import rows from "./sampleBookingData"
import SeatPicker from "react-seat-picker";

import "./styles.css";

function SeatPickerUser() {

  return (
    <div className="App">
      <h1>Seat Picker</h1>
      <SeatPicker rows={rows} maxReservableSeats={3} visible />
    </div>
  );
}

export default SeatPickerUser;