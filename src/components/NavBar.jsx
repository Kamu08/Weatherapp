import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Navbar = ({ searchCity, setSearchCity, handleSearch }) => {
  return (
    <AppBar position="static" sx={{width:'83.5vw', marginX:"100px" ,borderRadius:'50px 0px 50px 0px',  }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          🌤️ Weather App
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Search City"
            variant="outlined"
            size="small"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            sx={{ backgroundColor: 'white',borderRadius:'5px 0px 0px 5px'  }}
          />
          <Button
            variant="contained"
            color="info"
            onClick={handleSearch}
            sx={{borderRadius:'0px 20px 20px 0px', paddingY:'11px', paddingX:'20px'}}
            startIcon={<SearchIcon />}
          >
            
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
