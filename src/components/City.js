import React from 'react';

const API_key = "871868367e77b9c0501c168a1dcdeb48"

class City extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "",
            temp: "",
            weatherDes: "",
            humidity: "",
            wind: ""

        };
        this.getWeather();
    }

    calCelsius = temp => Math.floor(temp - 273.15);
    getWeather = async () => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response);

        this.setState({
            city: response.name,
            temp: this.calCelsius(response.main.temp),
            weatherDes: response.weather[0].description,
            humidity: response.main.humidity,
            wind: response.wind.speed
        });

    }

    render() {
        return (
            <>
                <div className="card__header__content">
                    <h2>{this.state.temp}<div className="celsius"></div></h2>
                    <h3>{this.state.weatherDes}</h3>
                    <div className="card__header__content__humidityWind">
                        <ul className="humidity">
                            <li>HUMIDITY</li>
                            <li>{this.state.humidity}%</li>
                        </ul>
                        
                        <ul className="wind">
                            <li>WIND</li>
                            <li>{this.state.wind} K/M</li>
                        </ul>
                    </div>
                </div>

                <div className="card__header__city">
                    <h3>{this.state.city}</h3>
                </div>
            </>
        );
    }
}


export default City;