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
import { getDatabase, ref, get } from "firebase/database";

function ReadData() {
  let [BodyPriceArray, setBodyPriceArray] = React.useState([]);

  React.useEffect(() => {
    const fetchDataBody = async () => {
      const db = getDatabase();
      const dbRef = ref(db, "createprice/body");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        
        setBodyPriceArray(Object.values(snapshot.val()));
      } else {
        console.error("No data available");
      }
    };

    fetchDataBody();
  }, []);
  return (
    <div>
       <h2>Salon Lilly Skin Prices</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Type</b>
              </TableCell>
              <TableCell >
                <b>Price</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {BodyPriceArray.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell >{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
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

      <ReadData/>
      <Footer />
    </div>
  );
}
