import { get, getDatabase, ref, remove } from "firebase/database";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import Admin from "./Admin";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import toast, { Toaster } from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const fetchDataForBooking = async () => {
  try {
    const db = getDatabase();
    const dbRef = ref(db, "UserData");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const dataSnapshot = snapshot.val();
      const dataArr = Object.values(dataSnapshot);
      return dataArr;
    } else {
      console.error("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function AdminDashboard() {
  const [bookingDataArray, setBookingDataArray] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRecord, setSelectedRecord] = React.useState(null);

  React.useEffect(() => {
    fetchDataForBooking().then((bookingData) => setBookingDataArray(bookingData));
  }, []);

  const handleClickOpen = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRecord(null);
  };

  const handleDelete = async () => {
    if (!selectedRecord) return;
    try {
      const db = getDatabase();
      const recordRef = ref(db, `UserData/${selectedRecord.key}`);

      await remove(recordRef);
      toast.success("Appointment Completed successfully");
      fetchDataForBooking().then((bookingData) => setBookingDataArray(bookingData));
    } catch (error) {
      console.error("Error completing appointment:", error);
      toast.error("Failed to complete appointment");
    } finally {
      handleClose();
    }
  };

  const navigate = useNavigate();
  const goToNewAppointment = () => {
    navigate("/NewApoinment");
  };

  return (
    <Box>
      <Toaster toastOptions={{ duration: 9000 }} position="top-right" />
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
        Manage Appointments
      </Typography>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "24px",
          marginLeft: 36,
          fontFamily: "cursive",
          color: "#3572EF",
        }}
      >
        Ongoing Appointments: {bookingDataArray.length}
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2, marginLeft: 36, marginBottom: 2 }}
        onClick={goToNewAppointment}
      >
        <AddIcon />
        Add Appointment
      </Button>


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
            <TableCell sx={{ width: "10%" }}><b>Appointment Date</b></TableCell>
            <TableCell sx={{ width: "18%" }}><b>Customer Email</b></TableCell>
            <TableCell sx={{ width: "15%" }}><b>Customer Name</b></TableCell>
            <TableCell sx={{ width: "10%" }}><b>Phone Number</b></TableCell>
            <TableCell sx={{ width: "15%" }}><b>Service</b></TableCell>
            <TableCell sx={{ width: "8%" }}><b>Time</b></TableCell>
            <TableCell sx={{ width: "8%" }}><b>Action</b></TableCell>
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
                  onClick={() => handleClickOpen(row)}
                  variant="outlined"
                  size="small"
                  color="success"
                >
                  <CheckCircleIcon />
                  Close
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            borderRadius: "10px",
            padding: "20px",
            minWidth: "400px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontWeight: "bold", color: "#d32f2f", textAlign: "center" }}
        >
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#555", textAlign: "center", marginBottom: "20px" }}
          >
            Are you sure you want to delete this appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            sx={{
              color: "#fff",
              backgroundColor: "#1976d2",
              marginRight: "10px",
            }}
          >
            No
          </Button>
          <Button
            onClick={handleDelete}
            sx={{ color: "#fff", backgroundColor: "#d32f2f" }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminDashboard;
