import { get, getDatabase,ref } from 'firebase/database';

import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import {

  TableBody,
  TableCell,

  TableHead,
  TableRow,
} from "@mui/material";


import Table from "@mui/material/Table";


function AdminDashboard() {
  const [bookingDataArray, setBookingDataArray] = React.useState([]);
  React.useEffect(() => {
    const fetchDataForBooking = async () => {




      const db = getDatabase();
      const dbRef = ref(db, "UserData");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        setBookingDataArray(Object.values(snapshot.val()));
      } else {
        console.error("No data available");
      }
    };

    fetchDataForBooking();
  }, []);
  return (
    <Box>
    <Typography sx={{textAlign:"center",fontWeight:"700",fontSize:"30px",color:"#5AB2FF"}}>On Going Appointments</Typography>



    <Table sx={{ minWidth: 900 ,ml:2}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ width: "15%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b>Date</b>
          </TableCell>
          <TableCell sx={{ width: "25%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b>Email</b>
          </TableCell>
          <TableCell sx={{ width: "20%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b>Name</b>
          </TableCell>
          <TableCell sx={{ width: "20%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b>Phone Number</b>
          </TableCell>
          <TableCell sx={{ width: "20%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b>Service</b>
          </TableCell>
          <TableCell sx={{ width: "10%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b>Time</b>
          </TableCell>
          <TableCell sx={{ width: "10%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <b color="red">Closed</b>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {bookingDataArray.map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {row.Date}
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.Email}</TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.Name}</TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.Phone}</TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.Service}</TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.Time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
 
    </Box>
  )
}

export default AdminDashboard;