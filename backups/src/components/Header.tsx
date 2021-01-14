import React from 'react';

const Header: React.FC<{ getFromAPI: (zipCode: string) => void }> = (props) => {
  const validateHandler = (e: string) => {
    if (e.length === 5) {
      props.getFromAPI(e);
    }
  };

  return (
    <div className="header">
      <h1>Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <input
        type="number"
        placeholder="ZIP Code"
        onChange={(e) => validateHandler(e.target.value)}
      />
    </div>
  );
};

export default Header;
