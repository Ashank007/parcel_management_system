import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';

function ParcelForm({ onSubmit, editingParcel, onCancel }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    address: '',
    contact_number: '',
    size: '',
    weight: ''
  });

  useEffect(() => {
    if (editingParcel) {
      setFormData(editingParcel);
    } else {
      setFormData({
        customer_name: '',
        address: '',
        contact_number: '',
        size: '',
        weight: ''
      });
    }
  }, [editingParcel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'weight' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Customer Name"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact Number"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
          <TextField
            label="Size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
          <TextField
            label="Weight"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            required
            inputProps={{ step: "0.01" }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              {editingParcel ? 'Update' : 'Add'}
            </Button>
            {editingParcel && (
              <Button variant="outlined" color="secondary" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </Paper>
  );
}

export default ParcelForm;
