import React, { useState } from "react";
import { MaterialTable } from "@bitanxen/react-datatable";
import { useHistory } from "react-router-dom";
  
const UserDashboard = () => {
      const history = useHistory();

      const [selected, setSelected] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const header = [
        {
          colId: "theatreId",
          colName: "ThreatreId",
          colType: "string",
          index: 0,
          keyCol: true,
          display: false
        },
        {
          colId: "theatreName",
          colName: "Theatre Name",
          colType: "string",
          index: 1,
          display: true,
          resize: true,
          width: 300
        },
        {
          colId: "movieName",
          colName: "Movie Name",
          colType: "string",
          index: 1,
          display: true,
          resize: true,
          width: 300
        },{
          colId: "timeSlot",
          colName: "Time Slot",
          colType: "string",
          index: 1,
          display: true,
          resize: true,
          width: 300
        },
        {
          colId: "date",
          colName: "Date",
          colType: "timestamp",
          index: 4,
          keyCol: false,
          display: true,
          width: 200
        }
      ];
    
      const data = [
        {
          theatreId: "1",
          theatreName: "Prozone",
          movieName: "bitanxen",
          timeSlot: "10:00AM",
          date: new Date(),
        },
        {
          theatreId: "2",
          theatreName: "Brooks",
          movieName: "rintuxen",
          timeSlot: "10:30AM",
          date: new Date()
        },
        {
          theatreId: "3",
          theatreName: "Fun",
          movieName: "xen002",
          timeSlot: "09:00PM",
          date: new Date()
        },
        {
          theatreId: "4",
          theatreName: "Prozone",
          movieName: "bitanxen",
          timeSlot: "11:00AM",
          date: new Date()
        },
        {
          theatreId: "5",
          theatreName: "Fun",
          movieName: "rintuxen",
          timeSlot: "10:30AM",
          date: new Date()
        },
        {
          theatreId: "6",
          theatreName: "Brooks",
          movieName: "xen002",
          timeSlot: "04:00PM",
          date: new Date()
        },
        {
          theatreId: "7",
          theatreName: "Prozone",
          movieName: "bitanxen",
          timeSlot: "09:00PM",
          date: new Date()
        },
        {
          theatreId: "8",
          theatreName: "Fun",
          movieName: "rintuxen",
          timeSlot: "10:30AM",
          date: new Date()
        },
        {
          theatreId: "9",
          theatreName: "Fun",
          movieName: "xen002",
          timeSlot: "12:00PM",
          date: new Date()
        },
        {
          theatreId: "10",
          theatreName: "Prozone",
          movieName: "bitanxen",
          timeSlot: "10:30AM",
          date: new Date()
        },
        {
          theatreId: "11",
          theatreName: "Brooks",
          movieName: "rintuxen",
          timeSlot: "11:00AM",
          date: new Date()
        },
        {
          theatreId: "12",
          theatreName: "Prozone",
          movieName: "xen002",
          timeSlot: "12:00PM",
          date: "Fri Jun 20 2022 14:45:39 GMT+0530"
        }
      ];

      const addHandler = () => {
        const value = selected
        history.push(`/${value}/seat-pick`)
      }
    
      return (
        <MaterialTable
          tableName="View Shows"
          loading={loading}
          searchable
          sortable
          filterable
          addHandler={addHandler}
          data={data}
          header={header}
          selected={selected}
          selectHandler={setSelected} />
      );

}

export default UserDashboard;