// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
// import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
// import SettingsIcon from "@mui/icons-material/Settings";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// import { useNavigate } from "react-router-dom";
// import Face3Icon from "@mui/icons-material/Face3";
// import './Dashboard.css'; // Import the CSS file for styling

// const drawerWidth = 280;
// const drawerBackgroundColor = "#f196a7";

// const ResponsiveDrawer = (props) => {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);
//   const navigate = useNavigate();

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false);
//   };

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const goToAdminDashboard = () => {
//     navigate("/AdminDash");
//   };

//   const goToUpdateTables = () => {
//     navigate("/PriceUpdate");
//   };

//   const goToNewAppointment = () => {
//     navigate("/NewApoinment");
//   };

//   const goToSentMail = () => {
//     navigate("/SentMail");
//   };

//   const goToSettings = () => {
//     navigate("/Setting");
//   };

//   const handleLogOut = () => {
//     // Add your logout logic here
//   };

//   const drawer = (
//     <div>
//       <Stack direction="column" spacing={5} sx={{ mt: "10px", alignItems: "flex-start", ml: "10px" }}>
//         <Button
//           onClick={goToAdminDashboard}
//           variant="contained"
//           fullWidth
//           sx={{
//             fontWeight: "600",
//             color: "whitesmoke",
//             justifyContent: "flex-start",
//           }}
//         >
//           <SpaceDashboardRoundedIcon />
//           Dashboard
//         </Button>
//         <Button
//           onClick={goToUpdateTables}
//           variant="contained"
//           fullWidth
//           sx={{
//             fontWeight: "600",
//             color: "white",
//             justifyContent: "flex-start",
//           }}
//         >
//           <AdminPanelSettingsIcon />
//           Manage Services
//         </Button>
//         <Button
//           onClick={goToNewAppointment}
//           variant="contained"
//           fullWidth
//           sx={{
//             fontWeight: "600",
//             color: "white",
//             justifyContent: "flex-start",
//           }}
//         >
//           <AssignmentRoundedIcon />
//           Manage Appointment
//         </Button>
//         <Button
//           onClick={goToSentMail}
//           variant="contained"
//           fullWidth
//           sx={{
//             fontWeight: "600",
//             color: "white",
//             justifyContent: "flex-start",
//           }}
//         >
//           <ForwardToInboxIcon />
//           Sent Mail
//         </Button>
//         <Button
//           onClick={goToSettings}
//           variant="contained"
//           fullWidth
//           sx={{
//             fontWeight: "600",
//             color: "white",
//             justifyContent: "flex-start",
//           }}
//         >
//           <SettingsIcon />
//           Settings
//         </Button>
//         <Button
//           onClick={handleLogOut}
//           variant="contained"
//           fullWidth
//           sx={{
//             fontWeight: "600",
//             color: "white",
//             justifyContent: "flex-start",
//           }}
//         >
//           <PowerSettingsNewIcon />
//           Log Out
//         </Button>
//       </Stack>
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar sx={{ backgroundColor: "#99154E", mb: "20px" }}>
//           <Typography variant="h6" noWrap component="div">
//             Lilly's Admin Panel
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onTransitionEnd={handleDrawerTransitionEnd}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>

//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <Button
//             variant="contained"
//             sx={{ textTransform: "capitalize", marginRight: "auto" }}
//             color="success"
//             onClick={goToNewAppointment}
//           >
//             <AddIcon />
//             New Appointment
//           </Button>
//           <Typography
//             sx={{ fontWeight: "700", marginRight: "100px", color: "#874CCC" }}
//           >
//             On Going Appointments
//           </Typography>
//           <Badge
//             sx={{ marginRight: "90px" }}
//             color="success"
//             overlap="circular"
//             badgeContent="4"
//           ></Badge>
//           <Badge
//             sx={{ marginRight: "90px" }}
//             color="error"
//             overlap="circular"
//             badgeContent="0"
//           ></Badge>
//         </div>
//         <Divider sx={{ mt: "10px" }}></Divider>
//         <div style={{ height: 400, width: "100%" }}>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650, mt: "20px" }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell
//                     sx={{
//                       fontWeight: "700",
//                       fontStyle: "oblique",
//                       fontSize: "18px",
//                       color: "#874CCC",
//                     }}
//                   >
//                     Customer
//                   </TableCell>
//                   <TableCell
//                     sx={{
//                       fontWeight: "700",
//                       fontStyle: "oblique",
//                       fontSize: "18px",
//                       color: "#874CCC",
//                     }}
//                   >
//                     Phone Number
//                   </TableCell>
//                   <TableCell
//                     sx={{
//                       fontWeight: "700",
//                       fontStyle: "oblique",
//                       fontSize: "18px",
//                       color: "#874CCC",
//                     }}
//                   >
//                     Service
//                   </TableCell>
//                   <TableCell
//                     sx={{
//                       fontWeight: "700",
//                       fontStyle: "oblique",
//                       fontSize: "18px",
//                       color: "#874CCC",
//                     }}
//                   >
//                     Date
//                   </TableCell>
//                   <TableCell
//                     sx={{
//                       fontWeight: "700",
//                       fontStyle: "oblique",
//                       fontSize: "18px",
//                       color: "#874CCC",
//                     }}
//                   >
//                     Time
//                   </TableCell>
//                   <TableCell
//                     sx={{
//                       fontWeight: "700",
//                       fontStyle: "oblique",
//                       fontSize: "18px",
//                       color: "#874CCC",
//                     }}
//                   >
//                     Note
//                   </TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {rows.map((row) => (
//                   <TableRow
//                     key={row.name}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell
//                       sx={{ fontWeight: "600" }}
//                       component="th"
//                       scope="row"
//                     >
//                       {row.Customer}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: "600" }}>
//                       {row.PhoneNumber}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: "600" }}>
//                       {row.Service}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: "600" }}>{row.Date}</TableCell>
//                     <TableCell sx={{ fontWeight: "600" }}>{row.Time}</TableCell>
//                     <TableCell sx={{ fontWeight: "600" }}>{row.Notes}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// };

// ResponsiveDrawer.propTypes = {
//   window: PropTypes.func,
// };

//export default ResponsiveDrawer;
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";

const drawerWidth = 280;
//const drawerBackgroundColor = "#f196a7";

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const goToAdminDashboard = () => {
    navigate("/AdminDash");
  };

  const goToUpdateTables = () => {
    navigate("/PriceUpdate");
  };

  const goToNewAppointment = () => {
    navigate("/NewApoinment");
  };

  const goToSentMail = () => {
    navigate("/SentMail");
  };

  const goToSettings = () => {
    navigate("/Setting");
  };

  const handleLogOut = () => {
    // Add your logout logic here
  };

  const drawer = (
    <div>
      <Stack direction="column" spacing={5} sx={{ mt: "10px", alignItems: "flex-start", ml: "10px" }}>
        <Button
          onClick={goToAdminDashboard}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "600",
            color: "whitesmoke",
            justifyContent: "flex-start",
          }}
        >
          <SpaceDashboardRoundedIcon />
          Dashboard
        </Button>
        <Button
          onClick={goToUpdateTables}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "600",
            color: "white",
            justifyContent: "flex-start",
          }}
        >
          <AdminPanelSettingsIcon />
          Manage Services
        </Button>
        <Button
          onClick={goToNewAppointment}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "600",
            color: "white",
            justifyContent: "flex-start",
          }}
        >
          <AssignmentRoundedIcon />
          Manage Appointment
        </Button>
        <Button
          onClick={goToSentMail}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "600",
            color: "white",
            justifyContent: "flex-start",
          }}
        >
          <ForwardToInboxIcon />
          Sent Mail
        </Button>
        <Button
          onClick={goToSettings}
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "600",
            color: "white",
            justifyContent: "flex-start",
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
            fontWeight: "600",
            color: "white",
            justifyContent: "flex-start",
          }}
        >
          <PowerSettingsNewIcon />
          Log Out
        </Button>
      </Stack>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
