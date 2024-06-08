import React from "react";
import {  CardContent, Typography, Grid, Box, Paper } from "@mui/material";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";
import { WiThermometer, WiHumidity,  WiBarometer } from 'react-icons/wi';

const WeatherCard = ({ weather, forecast }) => {
  const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const dailyForecast = forecast.list
    .filter((item, index) => index % 8 === 0)
    .slice(1, 4);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
      <CardContent sx={{ margin: 3, padding: 2,  }}>
        <Grid container spacing={5}  >
          {/* Left Section: Today's Weather */}
          <Grid item xs={12} md={6} >
            <Typography variant='h4' gutterBottom sx={{ color: "#333" }}>
              {weather.name}
            </Typography>
            <Paper
              elevation={3}
              sx={{ padding: 2, marginBottom: 2, backgroundColor: "#5C88C4" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={iconUrl(weather.weather[0].icon)}
                  alt='weather icon'
                  style={{ marginRight: 16 }}
                />
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 2,
                  }}
                >
                  <Typography sx={{ color: "#1A2130" }}>
                    <Typography variant='h6' >
                      {weather.main.temp} °C
                    </Typography>
                    <Typography >
                      {weather.weather[0].description}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "#1A2130",
                    }}
                  >
                    Feels Like {weather.main.feels_like}°C
                  </Typography>
                </Box>
              </Box>
            </Paper>
            {/* Additional Weather Details */}
            <Paper
              elevation={3}
              sx={{ padding: 2, backgroundColor: "#5C88C4", marginBottom: 2 }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Humidity <FiDroplet style={{ marginRight: 4 }} />{" "}
                  {weather.main.humidity}%
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Pressure <ImMeter style={{ marginRight: 4 }} />{" "}
                  {weather.main.pressure} hPa
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Wind Speed <MdAir style={{ marginRight: 4 }} />{" "}
                  {weather.wind.speed} m/s
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Max Temp <WiThermometer style={{ marginRight: 4 }} />{" "}
                  {weather.main.temp_max}°C
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Min Temp <WiThermometer style={{ marginRight: 4 }} />{" "}
                  {weather.main.temp_min}°C
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Sunrise <LuSunrise style={{ marginRight: 4 }} />{" "}
                  {formatTime(weather.sys.sunrise)}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#1A2130",
                  }}
                >
                  Sunset <LuSunset style={{ marginRight: 4 }} />{" "}
                  {formatTime(weather.sys.sunset)}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          {/* Right Section: 4-Day Forecast */}
          <Grid item xs={12} md={6} >
            <Typography variant='h5' gutterBottom sx={{ color: "#333" }}>
              3-Day Forecast
            </Typography>
            {dailyForecast.map((day, index) => (
              <Paper
              elevation={1}
              sx={{ padding: 2, marginBottom: 2, backgroundColor: "#5C88C4", color: "#1A2130" }}
              key={index}
            >
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={4}>
                  <Typography>{new Date(day.dt_txt).toLocaleDateString()}</Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                  <img src={iconUrl(day.weather[0].icon)} alt='weather icon' />
                  <Typography>Temp: {day.main.temp} °C</Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography><WiHumidity /> Humidity: {day.main.humidity}%</Typography>
                  <Typography><WiBarometer /> Pressure: {day.main.pressure} hPa</Typography>
                </Grid>
              </Grid>
            </Paper>
            ))}
          </Grid>
        </Grid>
      </CardContent>
  );
};

export default WeatherCard;
