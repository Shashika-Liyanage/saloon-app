import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import { Divider, Link } from "@mui/material";
import middleImage from "../../../src/Assets/middleImage.png";
import Image1 from "../../../src/Assets/Image1.png";
import Image2 from "../../../src/Assets/Welcome.png";
import map1 from "../../../src/Assets/map1.png";
import videoOne from "../../../src/Assets/videoOne.mp4";
import videoTwo from "../../../src/Assets/videoTwo.mp4";
import Layout from "../Layout/Layout";

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

  const img = {
    width: "100%" /* Set width to 100% of viewport width */,
    height: "auto" /* Maintain aspect ratio */,
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#D20065",
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        {" "}
        {/* Add background color */}
        <img className="img" width="50%" alignItems="right"  src={Image2} alt="image" />
      </div>

      <Typography
        variant="h5"
        component="h1"
        sx={{
          textAlign: "center",
          mt: "10px",
          fontWeight: "bold",
          color: "#5F0F40",
        }}
      >
        OUR SERVICES
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          textAlign: "center",
          mt: "10px",
          fontWeight: "bold",
          color: "#211951",
        }}
      >
        Whether your looking to treat your self to a suitable haircut, colour or
        to pamper your skin & body to a facial or a body scrub, getting ready
        for a party or it’s your routine grooming requirements, all of your
        beautifying needs can be taken cared by our team of experts.
      </Typography>
      <div style={cardContainerStyle}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Card
            key={index}
            style={{
              ...cardStyle,
              backgroundColor: hoveredIndex === index ? "#005B41" : "inherit",
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
        color={"#5F0F40"}
        sx={{ mt: "10px" }}
        gutterBottom
      >
        WE'LL STYLE, WHILE YOU SMILE
      </Typography>
      <div style={footerButtonStyle}>
        <Link>
          <Button
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

      <div>
        <img className="img" width="100%" src={Image1} alt="image" />
      </div>

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
