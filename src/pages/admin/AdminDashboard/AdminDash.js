import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ClassIcon from "@mui/icons-material/Class";
import CountUp, { useCountUp } from "react-countup";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FaceIcon from "@mui/icons-material/Face";
import { PieChart } from "../Chart/PieChart"; // Ensure the correct export from PieChart.js
import { LineChart } from "../Chart/LineChart"; // Ensure the correct export from LineChart.js
import { BarChart } from "../Chart/BarChart"; // Ensure the correct export from BarChart.js
import RealtimeCount from "./RealtimeCount"; // Ensure the correct path and export from RealtimeCount.js
import Sidebar from "../SideBar/Sidebar";

const AdminDash = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <>
      <Sidebar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* First Row */}
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8} md={6}>
              <Card sx={{ height: "45vh", width: "80%", marginLeft: "290px" }}>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Placeholder for other content in the first row */}
            </Grid>
          </Grid>

          {/* Second Row */}
          {/* <Box marginTop={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ padding: "5px" }}>
                  <Card
                    sx={{
                      width: "100%",
                      height: "203px",
                      backgroundImage: "linear-gradient(#FFF323, #439A97)",
                    }}
                  >
                    <CardContent>
                      <RealtimeCount
                        icon={<AddReactionIcon />}
                        number={0}
                        target={500}
                        text="Our Customers"
                      />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ padding: "5px" }}>
                  <Card
                    sx={{
                      width: "100%",
                      height: "203px",
                      backgroundImage: "linear-gradient(#FFF323, #439A97)",
                    }}
                  >
                    <CardContent>
                      <RealtimeCount
                        icon={<ReceiptIcon />}
                        number={0}
                        target={1805}
                        text="Sold Tickets"
                      />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box> */}

          {/* Third Row */}
          <Box marginTop={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ padding: "5px" }}>
                  {/* <Card
                    sx={{
                      width: "100%",
                      height: "203px",
                      backgroundImage: "linear-gradient(#FFF323, #439A97)",
                    }}
                  >
                    <CardContent>
                      <RealtimeCount
                        icon={<CameraRollIcon />}
                        number={0}
                        target={900}
                        text="All Events"
                      />
                    </CardContent>
                  </Card> */}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ padding: "5px" }}>
                  <Card
                    sx={{
                      width: "100%",
                      height: "203px",
                      backgroundImage: "linear-gradient(#FFF323, #439A97)",
                    }}
                  >
                    <CardContent>
                      <RealtimeCount
                        icon={<ClassIcon />}
                        number={0}
                        target={754}
                        text="Book Tickets"
                      />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          {/* Fourth Row */}
          {/* <Box marginTop={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                    <LineChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default AdminDash;
