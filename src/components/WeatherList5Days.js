import React from 'react';

import WeatherData from './WeatherData';
import WeatherItems from './WeatherItems';



class WeatherList5Days extends React.Component {
    constructor() {
        super()
    }

    render() {
        const WeatherList = WeatherData.map(item => <WeatherItems id={item.id} weekday={item.weekday} icon={item.icon} degree={item.degree} weather={item.weather} />)
        return (
            <>
                {WeatherList}
            </>
        );
    }
}

export default WeatherList5Days;
