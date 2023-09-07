import React, { useState } from 'react'

const Converter = () => {
 const [inputTemperature, setInputTemperature] = useState('');
    const [scaling, setScaling] = useState('celsius');
    const [result, setResult] = useState('');
    const [invalid, setInvalid] = useState('');
  
    const handleTemperatureChange = (e) => {
      setInputTemperature(e.target.value);
    };
  
    const handleScaleChange = (e) => {
      setScaling(e.target.value);
    };
  
    const convertToCelsius = () => {
      if (isNaN(inputTemperature)) {
        setInvalid('Please enter a valid number');
        setResult('');
      } else {
        setInvalid('');
        const temp = parseFloat(inputTemperature);
  
        if (scaling === 'fahrenheit') {
          const celsius = ((temp - 32) * 5) / 9;
          setResult(`${temp}°F is equal to ${celsius.toFixed(2)}°C`);
        } else {
          setResult(`${temp}°C is equal to ${temp * 1.8 + 32}°F`);
        }
      }
    };
  
    const convertToFahrenheit = () => {
      if (isNaN(inputTemperature)) {
        setInvalid('Please enter a valid number');
        setResult('');
      } else {
        setInvalid('');
        const temp = parseFloat(inputTemperature);
  
        if (scaling === 'celsius') {
          const fahrenheit = (temp * 9) / 5 + 32;
          setResult(`${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`);
        } else {
          setResult(`${temp}°F is equal to ${temp * 1.8 + 32}°C`);
        }
      }
    };
  
    return (
      <div className='container'>
        <h1>Temperature Converter</h1>
        <div>
          <input
            type="text"
            placeholder="Enter temperature"
            value={inputTemperature}
            onChange={handleTemperatureChange}
          />
          <select value={scaling} onChange={handleScaleChange}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <br />
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
        {invalid && <p>{invalid}</p>}
        <h3>Result:-{result}</h3>
      </div>
    );
}

export default Converter