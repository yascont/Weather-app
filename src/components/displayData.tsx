import '../styles/DisplayData.css'
import DataCart from './DataCart';

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

const DisplayData : React.FC<{ data: WeatherApiResponse | null}> = ({ data }) => {
  

  return (
    <section>
        <div className='datacarts'>
          <DataCart name="Humidity" value={`${data?.RelativeHumidity}`} unit="%"></DataCart>
          <DataCart name="Wind" value={`${data?.Wind.Speed.Metric.Value}`} unit="KM/H"></DataCart>
          <DataCart name="wind Direction" value={`${data?.Wind.Direction.Degrees}`} unit="degrees"></DataCart>
          <DataCart name="Pressure" value={`${data?.Pressure.Metric.Value}`} unit="mb"></DataCart>
          <DataCart name="Real Feel Temperature" value={`${data?.RealFeelTemperature.Metric.Value}`} unit="C"></DataCart>
          <DataCart name="WindGust" value={`${data?.WindGust.Speed.Metric.value}`} unit="KM/H"></DataCart>
          <DataCart name="Visibility" value={`${data?.Visibility.Metric.value}`} unit="KM/H"></DataCart>
          <DataCart name="CloudCover" value={`${data?.CloudCover}`} unit={undefined}></DataCart>
          <DataCart name="PressureTendency" value={`${data?.PressureTendency.LocalizedText}`} unit={undefined}></DataCart>
        </div>
    </section>
  )
}

export default DisplayData
