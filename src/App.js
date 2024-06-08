import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Navbar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import DefaultPage from './components/DefaultPage';
import { getWeather, getForecast } from './services/WeatherService';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const [searchCity, setSearchCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const weatherData = await getWeather(searchCity);
      const forecastData = await getForecast(searchCity);
      setWeather(weatherData);
      setForecast(forecastData);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#5A72A0', minHeight: '100vh', color: 'white', paddingTop: 3 }}>
      <Navbar
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearch={handleSearch}
      />
     <Container>
        {error ? (
          <ErrorPage message={error} />
        ) : weather && forecast ? (
          <WeatherCard weather={weather} forecast={forecast} />
        ) : (
          <DefaultPage />
        )}
      </Container> 
    </Box>
  );
};

export default App;
