import React from 'react';
import City from './City';
import WeatherListTwitter from './WeatherListTwitter';
import WeatherList5Days from './WeatherList5Days';


class Main extends React.Component {
    constructor() {
        super()
    }

    render() {

        return (
            <div className="card">

                <div className="card__header">
                    <City />
                </div>

                <div className="card__content">
                    <div className="card__content__twitter">
                        <WeatherListTwitter />
                    </div>

                    <div className="card__content__5Days">
                        <WeatherList5Days />
                    </div>
                </div>

            </div>
        );

    }
}



export default Main;