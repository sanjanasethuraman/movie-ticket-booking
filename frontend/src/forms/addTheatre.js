import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "./styles.css";

import "react-datepicker/dist/react-datepicker.css";

const AddTheatre = () => {
    const [startDate, setStartDate] = useState(new Date());
      return (
        <div className="form-container">
          <h2>Enter Movie Details</h2>
          <div className="form-group">
            <input placeholder="Theatre Name" className="form-control" />
          </div>
          <div className="form-group">
            <input placeholder="City" className="form-control" />
          </div>
          <button className="btn primary-btn">
            Submit
          </button>
        </div>
      );
}

export default AddTheatre;
