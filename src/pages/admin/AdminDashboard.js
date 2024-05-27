import { get, getDatabase, ref, remove } from "firebase/database";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import { Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function AdminDashboard() {
  const [bookingDataArray, setBookingDataArray] = React.useState([]);
  const [inputType, setInputType] = useState("");
  const fetchData = async () => {
    const db = getDatabase();
    const dbRef = ref(db, "UserData");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      setBookingDataArray(Object.values(snapshot.val()));
    } else {
      console.error("No data available");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const deleteRecord = async () => {
    try {
      const firebaseId = inputType;

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
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "30px",
          color: "#5AB2FF",
        }}
      >
        On Going Appointments
      </Typography>

      <Table sx={{ minWidth: 900, ml: 2 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Date</b>
            </TableCell>
            <TableCell>
              <b>Email</b>
            </TableCell>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell>
              <b>Phone Number</b>
            </TableCell>
            <TableCell>
              <b>Service</b>
            </TableCell>
            <TableCell>
              <b>Time</b>
            </TableCell>
            <TableCell>
              <b color="red">Closed</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingDataArray.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.Date}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Phone}</TableCell>
              <TableCell>{row.Service}</TableCell>
              <TableCell>{row.Time}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteRecord()}
                  startIcon={<DeleteSharpIcon />}
                >
                  Closed
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Toaster
        toastOptions={{
          duration: 5000,
          className: "",
          style: {
            color: "#713200",
          },
        }}
        position="top-right"
      />
    </Box>
  );
}

export default AdminDashboard;
