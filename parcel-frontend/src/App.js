import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParcelList from './ParcelList';
import ParcelForm from './ParcelForm';
import { Container, Typography, Snackbar, Alert } from '@mui/material';

function App() {
  const [parcels, setParcels] = useState([]);
  const [editingParcel, setEditingParcel] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchParcels = async () => {
    try {
      const res = await axios.get('http://localhost:5000/parcels');
      setParcels(res.data);
    } catch (error) {
      showSnackbar('Failed to fetch parcels', 'error');
    }
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  const showSnackbar = (message, severity='success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleAddOrUpdate = async (parcelData) => {
    try {
      if (editingParcel) {
        await axios.put(`http://localhost:5000/parcels/${editingParcel.id}`, parcelData);
        showSnackbar('Parcel updated successfully');
      } else {
        await axios.post('http://localhost:5000/parcels', parcelData);
        showSnackbar('Parcel added successfully');
      }
      setEditingParcel(null);
      fetchParcels();
    } catch (error) {
      showSnackbar('Operation failed', 'error');
    }
  };

  const handleEdit = (parcel) => {
    setEditingParcel(parcel);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/parcels/${id}`);
      showSnackbar('Parcel deleted successfully');
      fetchParcels();
    } catch (error) {
      showSnackbar('Delete failed', 'error');
    }
  };

  const handleCancelEdit = () => {
    setEditingParcel(null);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Parcel Management System
      </Typography>

      <ParcelForm
        onSubmit={handleAddOrUpdate}
        editingParcel={editingParcel}
        onCancel={handleCancelEdit}
      />

      <ParcelList
        parcels={parcels}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} onClose={handleCloseSnackbar} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
