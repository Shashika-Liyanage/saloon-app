import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";

const drawerWidth = 240;

function Admin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const shapeStyles = { bgcolor: "primary.main", width: 20, height: 20 };
  const shapeCircleStyles = { borderRadius: "50%" };

  const drawer = (
    <div>
      <List>
        {[
          { text: "Appointments", icon: <CalendarMonthIcon sx={{color:"#ED9455"}}/> },
          { text: "Add Admin", icon: <AdminPanelSettingsIcon sx={{color:"#DD5746"}}/> },
          { text: "Inbox", icon: <EmailIcon sx={{color:"#90D26D"}} /> },
          { text: "Sent Mail", icon: <ForwardToInboxIcon sx={{color:"#5755FE"}} /> },
          { text: "Settings", icon: <SettingsIcon  sx={{color:"#9CAFAA"}}/> },
          { text: "LogOut", icon: <PowerSettingsNewIcon sx={{color:"#E72929"}}/> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography sx={{ mt: "300px", ml: "45px" }}>
        Lilly Web Version 1.0
      </Typography>
    </div>
  );
  function createData(Customer, PhoneNumber, Service, Date, Time, Notes) {
    return { Customer, PhoneNumber, Service, Date, Time, Notes };
  }

  const rows = [
    createData(
      "ABC@gmail",
      756534407,
      "Hair Cut",
      "2024/02/12",
      "8:00AM",
      "Test"
    ),
    createData("d@gmail", 7565344556, "Facial", "2024/02/12", "9:00AM", "Test"),
    createData(
      "BC@gmail",
      756534457,
      "Clean Up",
      "2024/02/12",
      "10:00AM",
      "Test"
    ),
    createData(
      "AC@gmail",
      756534455,
      "Skin Tag Remove",
      "2024/02/12",
      "11:00AM",
      "Test"
    ),
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          marginTop: "6px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", marginRight: "auto", }}
            color="success"
          >
            {" "}
            <AddIcon />
            New Apoinment
          </Button>
          <Typography
            sx={{ fontWeight: "700", marginRight: "100px", color: "#874CCC" }}
          >
            On Going Appoinments
          </Typography>
          <Badge
            sx={{ marginRight: "90px" }}
            color="success"
            overlap="circular"
            badgeContent="4 "
          ></Badge>
          <Badge
            sx={{ marginRight: "90px" }}
            color="error"
            overlap="circular"
            badgeContent="0 "
          ></Badge>
        </div>
        <Divider sx={{ mt: "10px" }}></Divider>
        <div style={{ height: 400, width: "100%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, mt: "20px" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      fontStyle: "oblique",
                      fontSize: "18px",
                      color: "#874CCC",
                    }}
                  >
                    Customer
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      fontStyle: "oblique",
                      fontSize: "18px",
                      color: "#874CCC",
                    }}
                  >
                    Phone Number
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      fontStyle: "oblique",
                      fontSize: "18px",
                      color: "#874CCC",
                    }}
                  >
                    Service
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      fontStyle: "oblique",
                      fontSize: "18px",
                      color: "#874CCC",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      fontStyle: "oblique",
                      fontSize: "18px",
                      color: "#874CCC",
                    }}
                  >
                    Time
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "700",
                      fontStyle: "oblique",
                      fontSize: "18px",
                      color: "#874CCC",
                    }}
                  >
                    Note
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{ fontWeight: "600" }}
                      component="th"
                      scope="row"
                    >
                      {row.Customer}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>
                      {row.PhoneNumber}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>
                      {row.Service}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>{row.Date}</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>{row.Time}</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>
                      {row.Notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Admin;