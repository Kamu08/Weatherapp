// src/components/ErrorPage.js

import React from 'react';
import { Typography, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorPage = ({ message }) => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 5 }}>
      <ErrorOutlineIcon sx={{ fontSize: 80, color: 'red' }} />
      <Typography variant="h4" color="error" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ marginTop: 2 }}>
        😕 Sorry, we couldn't find the city you were looking for. Please try again.
      </Typography>
    </Box>
  );
};

export default ErrorPage;
