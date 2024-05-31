//-----------------------------------------------------------View Appointment------------------------------------------------//
//-----------------------------------------------------------View Appointment------------------------------------------------//

import { get, getDatabase, ref, remove } from "firebase/database";

import * as React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import Table from "@mui/material/Table";
import Admin from "./Admin";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import toast from "react-hot-toast";

function AdminDashboard() {
  const [bookingDataArray, setBookingDataArray] = React.useState([]);

  const fetchDataForBooking = async () => {
    const db = getDatabase();
    const dbRef = ref(db, "UserData");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      console.log(
        "data => ",
        Object.values(snapshot.val()),
        " => ",
        snapshot.val()
      );
      const dataSnapshot = snapshot.val();
      const dataArr = [];
      for (let key in dataSnapshot) {
        dataArr.push({ key, ...dataSnapshot[key] });
      }
      console.log("dataArr =>", dataArr);
      setBookingDataArray(dataArr);
    } else {
      console.error("No data available");
    }
  };


  React.useEffect(() => {
    fetchDataForBooking();
  }, []);

  const deleteRecord = async (firebaseId) => {
    try {

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `UserData/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchDataForBooking();
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  const navigate = useNavigate();
  const goToNewApoinment = () => {
    navigate("/NewApoinment");
  };
  return (
    <Box>
      <Admin />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "30px",
          marginLeft: 25,
          color: "#AF0171",
          fontFamily: "Georgia, serif",
        }}
      >
        Manage Appoinment
      </Typography>
      <Typography sx={{ fontWeight: "500", fontSize: "20px", marginLeft: 36 }}>
        On going Appointment
      </Typography>

      <Table
        sx={{
          width: "80%",
          minWidth: 600,
          marginLeft: 36,
          border: 1,
          borderColor: "grey.300",
        }}
        aria-label="simple table"
      >
        <TableHead sx={{}}>
          <TableRow>
            <TableCell
              sx={{
                width: "10%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Appoinment Date</b>
            </TableCell>
            <TableCell
              sx={{
                width: "18%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Customer Email</b>
            </TableCell>
            <TableCell
              sx={{
                width: "15%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Customer Name</b>
            </TableCell>
            <TableCell
              sx={{
                width: "10%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Phone Number</b>
            </TableCell>
            <TableCell
              sx={{
                width: "15%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Service</b>
            </TableCell>
            <TableCell
              sx={{
                width: "8%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Time</b>
            </TableCell>
            <TableCell
              sx={{
                width: "8%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderRight: 1,
                borderColor: "grey.300",
              }}
            >
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingDataArray.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                }}
              >
                {row.Date}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                }}
              >
                {row.Email}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                }}
              >
                {row.Name}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                }}
              >
                {row.Phone}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                }}
              >
                {row.Service}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRight: 1,
                  borderColor: "grey.300",
                }}
              >
                {row.Time}
              </TableCell>
              <TableCell>
                <Button onClick={() => deleteRecord(row.key)} variant="outlined" size="small">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2, marginLeft: 36 }}
        onClick={goToNewApoinment}
      >
        Add Appointment
        <AddIcon />
      </Button>
    </Box>
  );
}

export default AdminDashboard;
