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
  Badge,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../services/firebaseConfig";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';



const drawerWidth = 280;

const Admin = (props) => {
  //const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const goToDashboard = () => {
    navigate("/AdminDashboard");
  };
  const goToUserManage = () => {
    navigate("/UserManage");
  };
  const goToManageService = () => {
    navigate("/PriceUpdate");
  };
  const goToAppointment = () => {
    navigate("/NewApoinment");
  };

  const goToSentMail = () => {
    navigate("/SentMail");
  };
  const goToSettings = () => {
    navigate("/Setting");
  };
 
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/AdminLogin");
        // Show toast notification
        toast.success("You have been logged out successfully..");
      })
      .catch((error) => {
        // An error happened.

        toast.error("Error logging out. Please try again.");
      });
  };

  const drawer = (
    <div>
      <Stack direction="column"  spacing={4} sx={{ mt: "80px", alignItems: 'center' }}>
       
      <Button
          onClick={goToDashboard}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
          
        >
          <DashboardRoundedIcon/>
         DashBoard
        </Button>
        <Button
          onClick={goToManageService}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
        
        >
        <AdminPanelSettingsIcon/>
         Manage Service
        </Button>
        <Button
          onClick={goToUserManage}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
           
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
        >
         <ManageAccountsRoundedIcon/>
         Manage User
        </Button>
        <Button
          onClick={goToAppointment}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
        >
          <AdminPanelSettingsIcon />
         Manage Appointment
        </Button>

       
       
        <Button
          onClick={goToSentMail}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
        >
          <ForwardToInboxIcon />
          Sent Mail
        </Button>
        <Button
          onClick={goToSettings}
          variant="contained"
          fullWidth
          sx={{ fontWeight: "450", color: "white" }}sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
        >
          <SettingsIcon />
          Settings
        </Button>
        <Button
          onClick={handleLogOut}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "500",
            color: "#662549",
            ml: "20px",
            backgroundColor: "#FFE5E5",
            fontFamily:"serif" ,
            "&:hover": {
              backgroundColor: "#FFD1DA", 
             } 
          }}
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          //   container={container}

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
     
    </Box>
  );
};

export default Admin;
