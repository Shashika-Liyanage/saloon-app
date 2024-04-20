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
  return { name, StandardPrice };
}



const rows1 = [
  createData('Classic Full Arms', 3300.00 ),
  createData('Classic Full Legs', 3600.00),
  createData('Half Arms', 2500.00),
  createData('Half Leg', 3000.00),
  createData('Full Body', 11900.00),
  createData('Forehead', 900.00),
  createData('Eye Brows', 700.00),
  createData('Full Face', 3900.00),
  
];

const rows2 = [
  createData('Under Arms', 1100.00),
  createData('Feet', 1500.00),
  createData('Face & Neck', 3200.00),
  createData('Half Legs', 3900.00),
  createData('Full Legs', 5300.00),
  createData('Full Body Massage (60 Min)', 9400.00),
  createData('Shoulder Massage (30 Min)', 3200.00),
  createData('Classic - Body Scrub', 6600.00),

];





export default function BasicTable() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '48%', paddingRight: '10px' }}> {/* Added borderRight and paddingRight */}
          <TableContainer component={Paper}>
            <h2>WAXING</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Type</b></TableCell>
                  <TableCell align="right"><b>Standard Price(Rs)</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
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

        <div style={{ width: '48%' }}>
          <TableContainer component={Paper}>
            <h2>DE-TANNING PREMIUM</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Type</b></TableCell>
                  <TableCell align="right"><b>Standard Price(Rs)</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
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
      </div>

      
      </div>
    
  );
}
