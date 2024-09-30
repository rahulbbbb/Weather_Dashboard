import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import WeatherWidget from './WeatherWidget';
import { getWeatherData } from '../utils/weatherData';

interface Weather {
  id: string;
  location: string;
  temperature: number;
  condition: string;
  icon: string;
}

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<Weather[]>([]);
console.log(widgets)
  // Load saved widgets from localStorage on mount
  useEffect(() => {
    const savedWidgets = localStorage.getItem('widgets');
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  // Save widgets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  // Function to add a new widget
  const addWidget = () => {
    const weatherData = getWeatherData();
    setWidgets([...widgets, { ...weatherData, id: Date.now().toString() }]);
  };

  // Function to remove a widget
  const removeWidget = (id: string) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      {/* App Bar with Title */}
      <AppBar position="static" sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Weather Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3} justifyContent="center">
          {/* Map over the widgets array and render each WeatherWidget */}
          {widgets.map(widget => (
            <Grid item xs={12} sm={6} md={4} key={widget.id}>
              <WeatherWidget {...widget} onRemove={removeWidget} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Add Weather Widget Button */}
      <IconButton
        color="primary"
        onClick={addWidget}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#2196f3',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1769aa',
          },
          padding: 2,
          boxShadow: 3,
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Dashboard;
