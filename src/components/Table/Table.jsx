import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css';

function createData(code, origin, species, height) {
  return { code, origin, species, height };
}

const rows = [createData('DH3452', '인도네시아', '관엽식물', 'H90~120')];

export const TableC = () => {
  return (
    <>
      {/* <div>
        <p className="product-info_headline">상품 정보</p>
      </div> */}
      <TableContainer component={Paper} className="product-table_container">
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow className="product-table_header-row">
              <TableCell align="center" className="product-table_header-cell">
                상품코드
              </TableCell>
              <TableCell align="center" className="product-table_header-cell">
                원산지
              </TableCell>
              <TableCell align="center" className="product-table_header-cell">
                수종
              </TableCell>
              <TableCell align="center" className="product-table_header-cell">
                높이
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                className="product-table_body-row"
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" className="product-table_body-cell">
                  {row.code}
                </TableCell>
                <TableCell align="center" className="product-table_body-cell">
                  {row.origin}
                </TableCell>
                <TableCell align="center" className="product-table_body-cell">
                  {row.species}
                </TableCell>
                <TableCell align="center" className="product-table_body-cell">
                  {row.height}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
