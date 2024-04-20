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
  createData('Full Dressing (Early Morning) Add on Before 8.30am', 2200.00 ),
  createData('Full Dressing Derma', 5500.00),
  createData('Full Dressing Mac', 9000.00),
  createData('Saree Draping', 1700.00),
  createData('Make-Up (Mac)', 7000.00),
  createData('Make-Up (Derma)', 3600.00),
  createData('Hair Style', 2700.00),
  createData('Add-on Eye Lashes', 1600.00),
  
];


export default function BasicTable() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '48%', paddingRight: '10px' }}> {/* Added borderRight and paddingRight */}
          <TableContainer component={Paper}>
            
          <h2 style={{ color: '#FF69B4' }}> 
             
              DRESSING
            </h2>
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
             
            <h3 style={{ color: '#FF69B4' }}>BRIDAL - Please Contact +94 778512478 More details</h3>
          </TableContainer>
          
        </div>

     
    </div>

      
      </div>
    
  );
}
