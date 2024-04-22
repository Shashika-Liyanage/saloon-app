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
import BridalImage from "../../../src/Assets/bridalImage.png";

function createData(name: string, StandardPrice: number) {
  return { name, StandardPrice };
}

const rows1 = [
  createData("Full Dressing (Early Morning) Add on Before 8.30am", 2200.0),
  createData("Full Dressing Derma", 5500.0),
  createData("Full Dressing Mac", 9000.0),
  createData("Saree Draping", 1700.0),
  createData("Make-Up (Mac)", 7000.0),
  createData("Make-Up (Derma)", 3600.0),
  createData("Hair Style", 2700.0),
  createData("Add-on Eye Lashes", 1600.0),
];

export default function BasicTable() {
  return (
    <div>
      <div className="container">
        <div className="image-boxBr">
          <img src={BridalImage} alt="bridal Image" className="image" />

          <div className="BtextBr">
            <h2>Salon Lilly Bridal Prices</h2>
          </div>
        </div>
      </div>

      <div className="table">
        <div className="table-wrapper">
          <TableContainer component={Paper}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h2 className="heading">DRESSING</h2>
            </div>

            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="highlighted">
                    <b>Type</b>
                  </TableCell>
                  <TableCell align="right" className="highlighted">
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <img src={salonIcon} alt="Salon Icon" className="icon" />
              <h3 style={{ color: "#FF69B4", marginLeft: "10px" }}>
                BRIDAL - Please Contact +94 778512478 More details
              </h3>
            </div>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
