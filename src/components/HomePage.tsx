import "../styles/HomePage.css"

function HomePgae() {
  return (
    <div className="HomePage">
      <section className="display-weather">
        <input className="input" placeholder="casablanca"></input>
        <img src="/cloudy.svg"></img>
        <p className="temp">22° C</p>
        <p className="temp-text">Cloudy</p>
        <p className="date">25 March 2024</p>
        <p className="day">Monday, 05:45 AM</p>
        <p className="time">Night</p>
        <p>casablanca, Morocco</p>
      </section>
      <section className="display-weather-detailed">

      </section>
    </div>
  )
}

export default HomePgae
