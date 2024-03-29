import Header from './Header';
import Layout from './Layout';
import Weather from './Weather';
import getWeatherByZipCode from '../api/api';
import React, { useState } from 'react';

// const EXAMPLE_ZIP_CODE = 37203;
/* const EXAMPLE_WEATHER_RESPONSE =
{
  "base": "stations",
  "clouds": {
      "all": 90
  },
  "cod": 200,
  "coord": {
      "lat": 36.1504,
      "lon": -86.7916
  },
  "dt": 1610367250,
  "id": 0,
  "main": {
      "feels_like": 21.09,
      "humidity": 74,
      "pressure": 1026,
      "temp": 29.73,
      "temp_max": 30.2,
      "temp_min": 28.99
  },
  "name": "Nashville",
  "sys": {
      "country": "US",
      "id": 4609,
      "sunrise": 1610369886,
      "sunset": 1610405514,
      "type": 1
  },
  "timezone": -21600,
  "visibility": 10000,
  "weather": [
      {
          "description": "overcast clouds",
          "icon": "04n",
          "id": 804,
          "main": "Clouds"
      }
  ],
  "wind": {
      "deg": 10,
      "speed": 6.91
  }
} */

interface WeatherEntry {
  zipcode: string;
  clouds: { all: number };
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
    temp: number;
  };
  name: string;
  weather: {
    main: string;
    description: string;
  }[];
  wind: { speed: number };
}

export default function HomePage() {
  const [weatherentry, setweatherentry] = useState<null | WeatherEntry>(null);

  const getWeather = async (zipCode: string) => {
    console.log('getting weather from API', zipCode);
    const data = await getWeatherByZipCode(zipCode);
    console.log('we reset ', data);
    setweatherentry({ ...data, zipcode: zipCode });
  };

  return (
    <Layout>
      <Header getFromAPI={getWeather} />
      {weatherentry ? (
        <Weather entry={weatherentry} getWeather={getWeather} />
      ) : (
        ''
      )}
    </Layout>
  );
}
