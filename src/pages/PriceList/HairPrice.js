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
import HairImage from "../../../src/Assets/HairImage.png";


function createData(name: string, StandardPrice: number) {
  return { name, StandardPrice };
}

const rows1 = [
  createData("Fringe Cut", 850.0),
  createData("Trim", 1250.0),
  createData("Cut & Re-Style(Regular)", 2500.0),
  createData("Hair wash", 1700.0),
  createData("Blow Dry - Short", 2100.0),
  createData("Blow Dry - Mediam", 3400.0),
  createData("Blow Dry - Long", 3900.0),
  createData("Brading Per Strand - Short", 1100.0),
  createData("Braiding Per Strand - Long", 1700.0),
  createData("Ironing - Short", 2100.0),
  createData("Ironing - Mediam", 3500.0),
  createData("Ironing - Long", 4700.0),
  createData("Dream Curls - Short", 3400.0),
  createData("Dream Curls - Mediam", 3800.0),
  createData("Dream Curls - Long", 5500.75),
];

const rows2 = [
  createData("Ear to Ear Root Color with Ammonia", 3200.0),
  createData("Ear to Ear Root Color Ammonia Free", 4000.0),
  createData("Crown Area Root Color with Ammonia", 4400.0),
  createData("Crown Area Root Color Ammonia Free", 4800.0),
  createData("Global Color - Short", 10500.0),
  createData("Global Color - Medium", 13700.0),
  createData("Global Color - Long", 17500.0),
  createData("Global Highlight", 8800.0),
  createData("Pre - Lightning", 3500.0),
  createData("Creative Colour - Short", 12200.0),
  createData("Creative Colour - Medium", 16500.0),
  createData("Creative Colour - Long", 22000.0),
  createData("Henna Black Color - Short", 3900.0),
  createData("Henna Black Color - Medium", 4100.0),
  createData("Henna Black Color - Long", 4400.0),
];

const rows3 = [
  createData("Hair Massage Oil Treatment", 1300.0),
  createData("Crown Area Straightening - Short", 6100.0),
  createData("Crown Area Straightening - Long", 9700.0),
  createData("Ear to Ear Straightening - Short", 5300.0),
  createData("Ear to Ear Straightening - Long", 8300.0),
  createData("Straightening - Short", 11600.0),
  createData("Straightening - Long", 24800.0),
  createData("Rebonding - Short", 13200.0),
  createData("Rebonding - Long", 27000.0),
  createData("Keratin Treatment - Short", 22600.0),
  createData("Keratin Treatment - Long", 40000.0),
];

const rows4 = [
  createData("Keratin Hair Spa - Short", 4700.0),
  createData("Keratin Hair Spa - Medium", 5500.0),
  createData("Keratin Hair Spa - Long", 6000.0),
  createData("Botox Hair Spa - Short", 4900.0),
  createData("Botox Hair Spa - Medium", 6200.0),
  createData("Botox Hair Spa - Long", 7700.0),
  createData("Herbal Henna Treatment - Short", 3100.0),
  createData("Herbal Henna Treatment - Medium", 4200.0),
  createData("Herbal Henna Treatment - Long", 5300.0),
  createData("Botox Hair Spa - Medium", 6200.0),
  createData("Hot Oil Treatment", 3500.0),
];

export default function BasicTable() {
  return (
    <div>
      <div className="container">
        <div className="image-boxH">
          <img src={HairImage} alt="Salon Lilly Hair Prices" className="imageH" />
          <div className="BtextH">
            <h2>Salon Lilly Hair Prices</h2>
          </div>
        </div>
      </div>

      <div className="table">
        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" style={{ color: "#BC7FCD" }}/>
              <h2 className="headingH">HAIR CUT</h2>
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

        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="headingH">HAIR COLORING</h2>
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

      <div
       className="table"
      >
        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="headingH">HAIR TREATMENT</h2>
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

        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="headingH">HAIR SPA</h2>
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
                {rows4.map((row) => (
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
