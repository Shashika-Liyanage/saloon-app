import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./priceList.css";
import salonIcon from "../../../src/Assets/salonicon.jpg";

function createData(name: string, StandardPrice: number) {
  return { name, StandardPrice };
}

const rows = [
  createData("Face Shaving", 3800.0),
  createData("Add on - Galvanize Treatment", 1200.0),
  createData("Classic Clean Up", 3300.0),
  createData("Brightening Clean Up", 5900.0),
  createData("Basic Clean Up", 8500.0),
  createData("Natural Glow Facial", 5000.0),
  createData("Re-Energising Radiance Facial", 9000.0),
  createData("Sothys Hydra Moist Facial", 11600.0),
  createData("Under Eye Treatment", 6100.0),
  createData("Natural Face Massage", 1400.0),
  createData("Express Acne Ritual", 2500.0),
  createData("Eye Brows", 200.0),
  createData("Full Face", 1600.0),
];

export default function BasicTable() {
  return (
    <div style={{ width: "50%", margin: "auto", marginLeft: "0" }}>
      {" "}
      {/* Adjust marginLeft to 0 to position to the left */}
      <TableContainer component={Paper}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={salonIcon} alt="Salon Icon" className="icon" />
          <h2 className="heading">CLEAN UP | FACIAL | THREADING</h2>
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
            {rows.map((row) => (
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
  );
}
