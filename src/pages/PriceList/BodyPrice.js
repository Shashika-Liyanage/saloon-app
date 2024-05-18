import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "../Footer/Footer";
import "./priceList.css";
import salonIcon from "../../../src/Assets/salonicon.jpg";
import BodyImage from "../../../src/Assets/BodyImg.png";

function createData(name: string, StandardPrice: number) {
  return { name, StandardPrice };
}

const rows1 = [
  createData("Classic Full Arms", 3300.0),
  createData("Classic Full Legs", 3600.0),
  createData("Half Arms", 2500.0),
  createData("Half Leg", 3000.0),
  createData("Full Body", 11900.0),
  createData("Forehead", 900.0),
  createData("Eye Brows", 700.0),
  createData("Full Face", 3900.0),
];

const rows2 = [
  createData("Under Arms", 1100.0),
  createData("Feet", 1500.0),
  createData("Face & Neck", 3200.0),
  createData("Half Legs", 3900.0),
  createData("Full Legs", 5300.0),
  createData("Full Body Massage (60 Min)", 9400.0),
  createData("Shoulder Massage (30 Min)", 3200.0),
  createData("Classic - Body Scrub", 6600.0),
];

export default function BasicTable() {
  return (
    <div>
      <div className="container">
        <div className="image-boxB">
          <img
            src={BodyImage}
            alt="Salon Lilly Body Prices"
            className="imageB"
          />

          <div className="BtextB">
            <h2>Salon Lilly Body Prices</h2>
          </div>
        </div>
      </div>

      <div className="table">
        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={salonIcon}
                alt="Salon Icon"
                className="icon"
                style={{ color: "#BC7FCD" }}
              />
              <h2 className="headingB">WAXING</h2>
            </div>

            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Type</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Standard Price(Rs)</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.StandardPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div style={{ width: "48%" }}>
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={salonIcon}
                alt="Salon Icon"
                className="icon"
                style={{ color: "#BC7FCD" }}
              />
              <h2 className="headingB"> DE-TANNING PREMIUM</h2>
            </div>

            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Type</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Standard Price(Rs)</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.StandardPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
