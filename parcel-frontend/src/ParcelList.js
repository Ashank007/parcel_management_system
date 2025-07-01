import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';

function ParcelList({ parcels, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Customer Name</b></TableCell>
            <TableCell><b>Address</b></TableCell>
            <TableCell><b>Contact</b></TableCell>
            <TableCell><b>Size</b></TableCell>
            <TableCell><b>Weight</b></TableCell>
            <TableCell><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parcels.map((parcel) => (
            <TableRow key={parcel.id}>
              <TableCell>{parcel.customer_name}</TableCell>
              <TableCell>{parcel.address}</TableCell>
              <TableCell>{parcel.contact_number}</TableCell>
              <TableCell>{parcel.size}</TableCell>
              <TableCell>{parcel.weight}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onEdit(parcel)}
                  sx={{ mr: 1 }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => onDelete(parcel.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ParcelList;
