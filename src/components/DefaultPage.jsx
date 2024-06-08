import React from 'react';
import { Box, Typography } from '@mui/material';
import { WiDaySunny } from 'react-icons/wi';

const DefaultPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '75vh', 
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <WiDaySunny size={100} color="#f57c00" />
      <Typography variant="h3" gutterBottom>
        Welcome to Weather Forecast
      </Typography>
      <Typography variant="h6">
        Enter a city in the search bar above to get the current weather and a 3-day forecast.
      </Typography>
    </Box>
  );
};

export default DefaultPage;
