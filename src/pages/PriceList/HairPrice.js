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
  createData('Fringe Cut', 850.00 ),
  createData('Trim', 1250.00),
  createData('Cut & Re-Style(Regular)', 2500.00),
  createData('Hair wash', 1700.00),
  createData('Blow Dry - Short', 2100.00),
  createData('Blow Dry - Mediam', 3400.00),
  createData('Blow Dry - Long', 3900.00),
  createData('Brading Per Strand - Short', 1100.00),
  createData('Braiding Per Strand - Long', 1700.00),
  createData('Ironing - Short', 2100.00),
  createData('Ironing - Mediam', 3500.00),
  createData('Ironing - Long', 4700.00),
  createData('Dream Curls - Short', 3400.00),
  createData('Dream Curls - Mediam', 3800.00),
  createData('Dream Curls - Long', 5500.75),
];

const rows2 = [
  createData('Ear to Ear Root Color with Ammonia', 3200.00),
  createData('Ear to Ear Root Color Ammonia Free', 4000.00),
  createData('Crown Area Root Color with Ammonia', 4400.00),
  createData('Crown Area Root Color Ammonia Free', 4800.00),
  createData('Root Touch - Up', 5700.00),
  createData('Root Touch - Up Ammonia Free', 5800.00),
  createData('Global Color - Short', 10500.00),
  createData('Global Color - Medium', 13700.00),
  createData('Global Color - Long', 17500.00),
  createData('Global Highlight', 8800.00),
  createData('Pre - Lightning', 3500.00),
  createData('Colour with Pre-Lightning (Per Foil)', 1100.00),
  createData('Creative Colour - Short', 12200.00),
  createData('Creative Colour - Medium', 16500.00),
  createData('Creative Colour - Long', 22000.00),
  createData('Henna Black Color - Root', 3300.00),
  createData('Henna Black Color - Short', 3900.00),
  createData('Henna Black Color - Medium', 4100.00),
  createData('Henna Black Color - Long', 4400.00),
 
  
];

const rows3 = [
  createData('Hair Massage Oil Treatment', 1300.00),
  createData('Crown Area Straightening - Short', 6100.00),
  createData('Crown Area Straightening - Medium', 8500.00),
  createData('Crown Area Straightening - Long', 9700.00),
  createData('Ear to Ear Straightening - Short', 5300.00),
  createData('Ear to Ear Straightening - Medium', 6500.00),
  createData('Ear to Ear Straightening - Long', 8300.00),
  createData('Fringe Straightening', 4400.00),
  createData('Straightening - Short', 11600.00),
  createData('Straightening - Medium', 14300.00),
  createData('Straightening - Long', 24800.00),
  createData('Straightening - Retouch', 8600.00),
  createData('Rebonding - Short', 13200.00),
  createData('Rebonding - Medium', 16000.00),
  createData('Rebonding - Long', 27000.00),
  createData('Keratin Treatment - Short', 22600.00),
  createData('Keratin Treatment - Medium', 27300.00),
  createData('Keratin Treatment - Long', 40000.00),
 
];

const rows4 = [
  createData('Keratin Hair Spa - Short', 4700.00),
  createData('Keratin Hair Spa - Medium', 5500.00),
  createData('Keratin Hair Spa - Long', 6000.00),
  createData('Botox Hair Spa - Short', 4900.00),
  createData('Botox Hair Spa - Medium', 6200.00),
  createData('Botox Hair Spa - Long', 7700.00),
  createData('Herbal Henna Treatment - Short', 3100.00),
  createData('Herbal Henna Treatment - Medium', 4200.00),
  createData('Herbal Henna Treatment - Long', 5300.00),
  createData('Botox Hair Spa - Medium', 6200.00),
  createData('Hot Oil Treatment', 3500.00),
];

export default function BasicTable() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%' }}>
          <TableContainer component={Paper}>
            <h2>Hair Cut</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Standard Price(Rs)</TableCell>
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

        <div style={{ width: '50%' }}>
          <TableContainer component={Paper}>
            <h2>Hair Coloring</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Standard Price(Rs)</TableCell>
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

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%' }}>
          <TableContainer component={Paper}>
            <h2>Hair Treatments</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Standard Price(Rs)</TableCell>
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

        <div style={{ width: '50%' }}>
          <TableContainer component={Paper}>
            <h2>Hair Spa</h2>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Standard Price(Rs)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows4.map((row) => (
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
