import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  StandardPrice: number,
  
) {
  return { name, StandardPrice};
}

const rows = [
  createData('Face Shaving', 3800.00),
  createData('Add on - Galvanize Treatment', 1200.00),
  createData('Classic Clean Up', 3300.00),
  createData('Brightening Clean Up', 5900.00),
  createData('Basic Clean Up', 8500.00),
  createData('Natural Glow Facial', 5000.00),
  createData('Re-Energising Radiance Facial', 9000.00),
  createData('Sothys Hydra Moist Facial', 11600.00),
  createData('Under Eye Treatment', 6100.00),
  createData('Natural Face Massage', 1400.00),
  createData('Express Acne Ritual', 2500.00),
  createData('Eye Brows', 200.00),
  createData('Full Face', 1600.00),

  
];

export default function BasicTable() {
  return (
    <div style={{ width: '50%', margin: 'auto', marginLeft: '0' }}> {/* Adjust marginLeft to 0 to position to the left */}
      <TableContainer component={Paper}>
        <h2>CLEAN UP | FACIAL | THREADING</h2>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell><b>Type</b></TableCell>
                  <TableCell align="right"><b>Standard Price(Rs)</b></TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
