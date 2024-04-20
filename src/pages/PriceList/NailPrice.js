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
  createData('Classic Manicure', 1800.00 ),
  createData('Classic Pedicure', 2000.00),
  createData('Spa Manicure', 3800.00),
  createData('Spa Pedicure', 4200.00),
  createData('Gel Pedicure', 5000.00),
  
 
];

const rows2 = [
  createData('Brow Tint', 2500.00),
  createData('Lash Tint', 2000.00),
  createData('Brow Lamination', 7500.00),
  createData('Eyelash Refill', 7500.00),
  createData('Eye Lash - Hybrid', 12500.00),

  
];

const rows3 = [
  createData('Piercing - Nose', 2500.00),
  createData('Piercing -Ear', 1500.00),
  createData('Nail Art Rein Stone/ Sticker/ Each', 150.00),
  createData('Nail Art Foils/Gold & Silver Papers Each', 200.00),
  createData('Nail Gel Art Full Set', 1500.00),
  createData('Acrylic Natural Nail Overlay Full Set)', 5000.00),
  createData('Acrylic for Toes Full Set', 5500.00),
  createData('Acrylic Individual', 700.00),
  createData('Acrylic Soak Off', 1500.00),
  createData('Temporary Nail Pasting (Press On)', 3500.00),
 
];



export default function BasicTable() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '48%', paddingRight: '10px' }}> {/* Added borderRight and paddingRight */}
          <TableContainer component={Paper}>
            <h2>MANICURE | PEDICURE</h2>
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
            <h2>EYE LASHES EXTENSION | MICROBLADING</h2>
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

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '48%', paddingRight: '10px' }}> {/* Added borderRight and paddingRight */}
          <TableContainer component={Paper}>
            <h2>NAIL LACQER | EXTENTION | TIPS</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Type</b></TableCell>
                  <TableCell align="right"><b>Standard Price(Rs)</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows3.map((row) => (
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
