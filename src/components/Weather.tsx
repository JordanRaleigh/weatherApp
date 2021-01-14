import CountDown from './CountDown';

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

const Weather: React.FC<{
  entry: WeatherEntry;
  getWeather: (zipcode: string) => void;
}> = ({ entry, getWeather }) => {
  console.log('the type of object weather is ', entry.weather);
  return (
    <div className="section card">
      <h2>Local Weather</h2>
      <p>In your zip code, the weather is:</p>
      <table>
        <tbody>
          <tr>
            <td>City</td>
            <td>{entry.name}</td>
          </tr>
          <tr>
            <td>Temperature</td>
            <td>{entry.main.temp}</td>
          </tr>
          <tr>
            <td>Real Feel</td>
            <td>{entry.main.feels_like}</td>
          </tr>
          {/* <tr>
            <td>Rain</td>
            <td>{entry.dt}</td>
          </tr> */}
          <tr>{/*Put other applicable "main" stuff in here*/}</tr>
          {entry.weather.map((item, index) => {
            return (
              <tr>
                <td>{item.main}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CountDown
        updateWeather={() => {
          getWeather(entry.zipcode);
        }}
      />
    </div>
  );
};
export default Weather;
