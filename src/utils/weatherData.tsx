const weatherDataList = [
    {
      location: 'New York',
      temperature: 22,
      condition: 'Sunny',
      icon: 'https://example.com/sunny-icon.png',
    },
    {
      location: 'Los Angeles',
      temperature: 28,
      condition: 'Cloudy',
      icon: 'https://example.com/cloudy-icon.png', 
    },
    {
      location: 'London',
      temperature: 16,
      condition: 'Rainy',
      icon: 'https://example.com/rainy-icon.png', 
    },
    {
      location: 'Tokyo',
      temperature: 24,
      condition: 'Windy',
      icon: 'https://example.com/windy-icon.png', 
    },
    {
      location: 'Sydney',
      temperature: 30,
      condition: 'Hot',
      icon: 'https://example.com/hot-icon.png', 
    },
  ];
  
  export const getWeatherData = () => {
    // Randomly select weather data from the list
    const randomIndex = Math.floor(Math.random() * weatherDataList.length);
    return weatherDataList[randomIndex];
  };
  