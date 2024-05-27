import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import {
  Button,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../services/firebaseConfig";
import { get, getDatabase, ref } from "firebase/database";
import Table from "@mui/material/Table";

const drawerWidth = 280;

const Admin = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [setIsClosing] = React.useState(false);
  const [bookingDataArray, setBookingDataArray] = React.useState([]);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const goToSentMail = () => {
    navigate("/SentMail");
  };
  const goToSettings = () => {
    navigate("/Setting");
  };
  const goToUpdateTables = () => {
    navigate("/PriceUpdate");
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/AdminLogin");
        toast.success("You have been logged out successfully..");
      })
      .catch((error) => {
        toast.error("Error logging out. Please try again.");
      });
  };

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

  const drawer = (
    <div>
      <Stack direction="column" spacing={5} sx={{ mt: "20px" }}>
        <Button
          onClick={goToUpdateTables}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "600",
            color: "white",
            ml: "20px",
          }}
        >
          <AdminPanelSettingsIcon />
          Update Tables
        </Button>
        <Button
          onClick={goToSentMail}
          variant="contained"
          fullWidth
          sx={{ fontWeight: "600", color: "white" }}
        >
          <ForwardToInboxIcon />
          Sent Mail
        </Button>
        <Button
          onClick={goToSettings}
          variant="contained"
          fullWidth
          sx={{ fontWeight: "600", color: "white" }}
        >
          <SettingsIcon />
          Settings
        </Button>
        <Button
          onClick={handleLogOut}
          variant="contained"
          fullWidth
          sx={{ fontWeight: "600", color: "white" }}
        >
          <PowerSettingsNewIcon />
          LogOut
        </Button>
      </Stack>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "#99154E", mb: "20px" }}>
          <Typography variant="h6" noWrap component="div">
            Lilly's Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
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
    </Box>
  );
};

export default Admin;
