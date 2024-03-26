import { useState } from "react"
import "../styles/HomePage.css"
import DisplayData from "./displayData"
import axios from 'axios';


function HomePgae() {

  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  const [cityData, setcityData] = useState<firstWeatherApiResponse | null>(null);
  const [chooseDay, setchooseDay] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  interface firstWeatherApiResponse {
    AdministrativeArea : {
      LocalizedName : string,
    }
    Country:{
      LocalizedName : string,
    }
    status : number,
  }

  interface WeatherApiResponse {
    LocalObservationDateTime: string;
    IsDayTime: boolean;
    WeatherText: string;
    Temperature: {
      Metric: {
        Value: number;
      };
    }

    RelativeHumidity: string,

  Wind: {
    Speed: {
      Metric: {
        Value: number,
      }
    },
    Direction: {
      Degrees: number,
    }
  }
  Pressure: {
    Metric: {
      Value: number,
    }
  },
  RealFeelTemperature: {
    Metric: {
      Value: number,
    }
  }
  WindGust :{
    Speed :{
      Metric:{
        value: number,
      }
    }
  }
  Visibility :{
    Metric:{
      value: number,
  }
}
  CloudCover : number,
  PressureTendency : {
    LocalizedText : string,
  },
  }
  

  const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=3drJSaTrWkoUGb8KLOOmjQKdH8sZYQMR&q=${searchQuery}`)
      .then(function (response) {
        setcityData(response.data[0])
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${response.data[0].Key}?apikey=3drJSaTrWkoUGb8KLOOmjQKdH8sZYQMR&details=true`)
        .then(function (response){
            setWeatherData(response.data[0]);
        })
      }).catch(function () {
        setWeatherData(null);
    
      })
      .catch(function () {
        setWeatherData(null);
    
      })
    }
  };

  
  return (
    <div className="HomePage">
      <section className="display-weather">
        <input  onKeyDown={handleKeyDown} onChange={(e) => setSearchQuery(e.target.value)} className="input" placeholder="casablanca"></input>
        <img className="img" src="/cloudy.svg"></img>
        <p className="temp">{weatherData ? `${weatherData.Temperature?.Metric?.Value}° C` : 'N/A'}</p>
        <p className="temp-text">{weatherData?.WeatherText}</p>
        <p className="line"></p>
        <div className="all-date">
          <p className="date">{weatherData?.LocalObservationDateTime.substring(8, 10)} {weatherData?.LocalObservationDateTime.substring(5, 7)} {weatherData?.LocalObservationDateTime.substring(0, 4)}</p>
          <p className="time">{weatherData?.IsDayTime ? 'Day' : 'Night'}</p>
        </div>
        <p className="location">{cityData && cityData.AdministrativeArea? `${cityData.AdministrativeArea.LocalizedName}, ${cityData.Country.LocalizedName}` : "N/A"}</p>
      </section>
      <section className="display-weather-detailed">
        <section className="day-choice">
          <p className={`today ${chooseDay? 'blue' : ''}`}onClick={()=>setchooseDay(1)}>Today</p>
          <p className={`tomorrow ${chooseDay? '' : 'blue'}`} onClick={()=>setchooseDay(0)}>Tomorrow</p>
        </section>
        <DisplayData data={weatherData}/>
        <p className="right">Coded By- <span className="blueDark">yassine</span></p>
      </section>
    </div>
  )
}

export default HomePgae
