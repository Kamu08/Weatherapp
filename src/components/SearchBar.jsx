import React from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ searchCity, setSearchCity, handleSearch }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <TextField
        label="City"
        variant="outlined"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
