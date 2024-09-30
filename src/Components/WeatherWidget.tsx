import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';

interface WeatherWidgetProps {
  id: string;
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  onRemove: (id: string) => void;
}

// Helper function to dynamically style the card based on the weather condition
const getCardStyle = (condition: string) => {
  switch (condition) {
    case 'Sunny':
      return { backgroundColor: '#ffeb3b', color: '#000' };
    case 'Cloudy':
      return { backgroundColor: '#90a4ae', color: '#fff' };
    case 'Rainy':
      return { backgroundColor: '#607d8b', color: '#fff' };
    case 'Windy':
      return { backgroundColor: '#4caf50', color: '#fff' };
    case 'Hot':
      return { backgroundColor: '#f44336', color: '#fff' };
    default:
      return { backgroundColor: '#fff', color: '#000' };
  }
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ id, location, temperature, condition, icon, onRemove }) => {
    console.log(icon)
  return (
    <Card
      sx={{
        ...getCardStyle(condition),
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {location}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: '500' }}>
              {temperature}°C
            </Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
              {condition}
            </Typography>
          </Box>
          <Box>
            <img src={icon} alt="weather icon" style={{ width: '60px', height: '60px' }} />
          </Box>
        </Box>
      </CardContent>
      <IconButton
        onClick={() => onRemove(id)}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: getCardStyle(condition).color === '#fff' ? '#000' : '#fff',
        }}
      >
        <ClearIcon />
      </IconButton>
    </Card>
  );
};

export default WeatherWidget;
