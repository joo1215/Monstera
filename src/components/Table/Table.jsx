import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(code, origin, species, height) {
  return { code, origin, species, height };
}

const rows = [createData('DH3452', '인도네시아', '관엽식물', 'H90~120')];

export const TableC = ({ ariaLabel }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label={ariaLabel}>
        <TableHead>
          <TableRow>
            <TableCell align="center">상품코드</TableCell>
            <TableCell align="center">원산지</TableCell>
            <TableCell align="center">수종</TableCell>
            <TableCell align="center">높이</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">{row.origin}</TableCell>
              <TableCell align="center">{row.species}</TableCell>
              <TableCell align="center">{row.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
