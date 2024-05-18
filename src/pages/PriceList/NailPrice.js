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
import NailImage from "../../../src/Assets/NailImg.png";

function createData(name: string, StandardPrice: number) {
  return { name, StandardPrice };
}

const rows1 = [
  createData("Classic Manicure", 1800.0),
  createData("Classic Pedicure", 2000.0),
  createData("Spa Manicure", 3800.0),
  createData("Spa Pedicure", 4200.0),
  createData("Gel Pedicure", 5000.0),
];

const rows2 = [
  createData("Brow Tint", 2500.0),
  createData("Lash Tint", 2000.0),
  createData("Brow Lamination", 7500.0),
  createData("Eyelash Refill", 7500.0),
  createData("Eye Lash - Hybrid", 12500.0),
];

const rows3 = [
  createData("Piercing - Nose", 2500.0),
  createData("Piercing -Ear", 1500.0),
  createData("Nail Art Rein Stone/ Sticker/ Each", 150.0),
  createData("Nail Art Foils/Gold & Silver Papers Each", 200.0),
  createData("Nail Gel Art Full Set", 1500.0),
  createData("Acrylic Natural Nail Overlay Full Set)", 5000.0),
  createData("Acrylic for Toes Full Set", 5500.0),
  createData("Acrylic Individual", 700.0),
  createData("Acrylic Soak Off", 1500.0),
  createData("Temporary Nail Pasting (Press On)", 3500.0),
];

export default function BasicTable() {
  return (
    <div>
      <div className="container">
        <div className="image-boxN">
          <img
            src={NailImage}
            alt="Salon Lilly Nail Prices"
            className="imageN"
          />
          <div className="BtextN">
            <h2>Salon Lilly Nail Prices</h2>
          </div>
        </div>
      </div>

      <div className="table">
        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="headingN">MANICURE | PEDICURE</h2>
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
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="headingN">EYE LASHES EXTENSION | MICROBLADING</h2>
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

      <div className="table">
        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="headingN">NAIL LACQER | EXTENTION | TIPS</h2>
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
                {rows3.map((row) => (
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
