import React from "react";
import "./about.css";
import map1 from "../../../src/Assets/map1.png";
import Footer from "../Footer/Footer";
import whatsapp from "../../../src/Assets/whatsapp.jpg";
import call from "../../../src/Assets/call icon.jpg";
import atIc from "../../../src/Assets/aticone.jpg";

function About() {
  return (
    <div>
      <div className="about-container">
        <h3 className="heading">ABOUT US</h3>
        <p className="paragraph">
          LillySalon is poised to become the premier destination for salon
          services in Sri Lanka. Our team comprises experienced professionals
          with over a decade of expertise in salon management and innovation,
          leveraging the latest technology to meet international standards. If
          you're seeking top-notch salon services, LillySalon is your go-to
          platform. We provide our customers with unparalleled service and a
          fresh online booking experience. We are committed to continuously
          enhancing our platform by introducing new features and offering an
          extensive selection of salon services, including:
          <ul>
            <li>Haircuts</li>
            <li>Styling</li>
            <li>Coloring</li>
            <li>Manicures</li>
            <li>Pedicures</li>
            <li>Facials</li>
            <li>Spa treatments</li>
          </ul>
          And much more to come in the near future. Experience the convenience
          of booking salon appointments online and enjoy a superior salon
          experience with LillySalon.
        </p>
      </div>

      <div className="image-container">
        <img className="imageMap" src={map1} alt="map" />

      </div>

      <Footer />
    </div>
  );
}

export default About;
