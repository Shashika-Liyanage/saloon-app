import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import { Divider, Link, Stack } from "@mui/material";
import middleImage from "../../../src/Assets/middleImage.png";
import Image1 from "../../../src/Assets/Image1.png";
import Image2 from "../../../src/Assets/Welcome.png";
import map1 from "../../../src/Assets/map1.png";
import videoOne from "../../../src/Assets/videoOne.mp4";
import videoTwo from "../../../src/Assets/videoTwo.mp4";
import Layout from "../Layout/Layout";
import BookingPage from "../Booking/BookingPage";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const headerStyle = {
  height: "80px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
};

const salonNameStyle = {
  marginRight: "auto",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  fontSize: "15px",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const listStyle = {
  marginLeft: "auto",
  fontSize: "16px", // Set smaller font size for the list
};

const cardContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: "20px",
};

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "200px",
  margin: "10px",
  borderRadius: "50%",
  transition: "background-color 0.3s",
  cursor: "pointer",
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
};

const cardContentStyle = {
  textAlign: "center",
};

const footerButtonStyle = {
  marginTop: "20px",
  borderRadius: "100px", // Increase the border radius further
  display: "flex",
  justifyContent: "center",
};

const Dashboard = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const navigate = useNavigate();
  const GoToBookingPage = () => {
    navigate("/booking");
  };
  const img = {
    width: "100%" /* Set width to 100% of viewport width */,
    height: "auto" /* Maintain aspect ratio */,
  };

  return (
    <div style={{ justifyContent: "flex-start" }}>
      <div
        style={{
          position: "flex-start",
          textAlign: "flex-start",
          backgroundColor: "#D20065",
          borderBottomLeftRadius: "250px",
          borderBottomRightRadius: "250px",
          overflow: "hidden",
        }}
      >
        {" "}
        {/* Add background color */}
        <img
          className="img"
          width="30%"
          height="auto"
          alignItems="left"
          src={Image2}
          alt="image"
          style={{
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "280px",
          }}
        />
        <div style={footerButtonStyle}>
          <Link>
            <Button
              onClick={GoToBookingPage}
              variant="contained"
              color="primary"
              sx={{
                mb: "10px",
                borderRadius: "20px",
                padding: "15px 30px",
                fontSize: "16px",
              }}
            >
              Book Now
            </Button>
          </Link>
        </div>
        <span
          style={{
            position: "absolute",
            top: "350px", // Adjust the top position as needed
            left: "50%",
            color: "#fff",
            transform: "translateX(-50%)",
            fontSize: "56px",
            fontWeight: "700",
          }}
        >
          Welcome to Salon Lilly
        </span>
      </div>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          mt: "10px",
          fontWeight: "bold",
          color: "#ff6a00",
        }}
      >
        OUR SERVICES
      </Typography>

      <div style={cardContainerStyle}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Card
            key={index}
            style={{
              ...cardStyle,
              backgroundColor: hoveredIndex === index ? "#D20065" : "inherit",
            }}
            sx={cardStyle}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            elevation={3}
          >
            <CardContent style={cardContentStyle}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                {["HAIR", "SKIN", "NAILS", "BODY", "BRIDAL"][index]}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Typography
        variant="h2"
        align="center"
        color={"#D20065"}
        sx={{ mt: "10px" }}
        gutterBottom
      >
        WE'LL STYLE, WHILE YOU SMILE
      </Typography>

      <div
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "36px",
          color: "#D20065",
        }}
      >
        <p> Welcome to Salon Lilly</p>
        <p>CREATING A BEAUTIFUL COMMUNITY</p>
        <p>Revive,Refresh,and manage with Lilly'S expertise!</p>
      </div>
      <div
        style={{
          textAlign: "center",
          // fontWeight: "700",
          fontSize: "50px",
          color: "#D20065",
          fontFamily: "monospace",
        }}
      >
        <p>Look Good & Feel Good!</p>
      </div>
      <Stack direction="row" sx={{ textAlign: "center" }}>
        <h1 style={{ margin: "0 auto" }}>
          Inspire:
          <p>Inspire the</p>
          <p>srilanka society</p>
          <p>to be well groomed &</p>
          <p>embrace to their</p>
          <p>full potentail</p>
        </h1>
        <h1 style={{ margin: "0 auto" }}>
          Empower:
          <p>we employee talenet</p>
          <p>that is qualified</p>
          <p>through the national</p>
          <p>vocational education</p>
          <p>and lead them to a</p>
          <p>better life</p>
        </h1>
        <h1 style={{ margin: "0 auto" }}>
          Affordable
          <p>Happy client</p>
          <p>paying with</p>
          <p>budget - friendly</p>
          <p>price</p>{" "}
         
        </h1>
        <h1 style={{ margin: "0 auto" }}>
          Ambience:
          <p>Image of</p>
          <p>calm, stylish</p>
          <p>salon interior</p>{" "}
        </h1>
        <h1 style={{ margin: "0 auto" }}>
          Safe:
          <p>Clean,</p>
          <p>sanitized salon</p>
          <p>with mask &</p>
          <p>gloved</p>          
          <p>stylist</p>{" "}
        </h1>
      </Stack>

      {/* <video src={videoOne} type="video/mp4"></video> */}
      <div className="container-fluid p-0">
        <video width="100%" id="bannerVideo" autoPlay muted loop>
          <source src={videoOne} type="video/mp4" />
        </video>
      </div>
      <Divider />
      <img className="img" src={middleImage} alt="middle image" />
      <img className="img" src={map1} alt="map" />

      <Footer />
    </div>
  );
};

export default Dashboard;
