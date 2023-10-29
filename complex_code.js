/* complex_code.js */

// This code demonstrates a complex implementation of a weather forecasting system.

// Define a class for a weather station
class WeatherStation {
  // Constructor for WeatherStation class
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.readings = [];
  }

  // Method to add a new weather reading
  addReading(reading) {
    this.readings.push(reading);
  }

  // Method to get the average temperature
  getAverageTemperature() {
    let sum = 0;
    this.readings.forEach((reading) => {
      sum += reading.temperature;
    });
    return sum / this.readings.length;
  }

  // Method to get the maximum wind speed
  getMaxWindSpeed() {
    let maxWindSpeed = 0;
    this.readings.forEach((reading) => {
      if (reading.windSpeed > maxWindSpeed) {
        maxWindSpeed = reading.windSpeed;
      }
    });
    return maxWindSpeed;
  }

  // Method to display the weather forecast
  displayForecast() {
    console.log(`Weather forecast for ${this.name} (${this.location}):`);
    console.log(`- Average Temperature: ${this.getAverageTemperature()}°C`);
    console.log(`- Max Wind Speed: ${this.getMaxWindSpeed()} km/h`);
  }
}

// Define a class for a weather reading
class WeatherReading {
  // Constructor for WeatherReading class
  constructor(temperature, humidity, windSpeed) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }
}

// Create a new WeatherStation instance
const weatherStation = new WeatherStation("Meteorology Center", "City X");

// Add some sample weather readings
weatherStation.addReading(new WeatherReading(25, 80, 10));
weatherStation.addReading(new WeatherReading(22, 75, 12));
weatherStation.addReading(new WeatherReading(23, 77, 11));

// Display the weather forecast
weatherStation.displayForecast();

// Output:
// Weather forecast for Meteorology Center (City X):
// - Average Temperature: 23.333333333333332°C
// - Max Wind Speed: 12 km/h

// Additional lines of code can be added to further enhance the functionality of the weather forecasting system.