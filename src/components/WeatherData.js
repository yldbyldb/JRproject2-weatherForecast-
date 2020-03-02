import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';



const WeatherData = [
    {
        id:1,
        weekday: 'MON',
        icon: <FontAwesomeIcon icon={faSun} />,
        degree: '9',
        weather: 'SUNNY'
    },
    {
        id:2,
        weekday: 'TUE',
        icon: <FontAwesomeIcon icon={faCloud} />,
        degree: '19',
        weather: 'CLOUDY'
    },
    {
        id:3,
        weekday: 'WED',
        icon: <FontAwesomeIcon icon={faCloudRain} />,
        degree: '22',
        weather: 'RAINING'
    },
    {
        id:4,
        weekday: 'THU',
        icon: <FontAwesomeIcon icon={faBolt} />,
        degree: '12',
        weather: 'STORM'
    },
    {
        id:5,
        weekday: 'FRI',
        icon: <FontAwesomeIcon icon={faSun} />,
        degree: '23',
        weather: 'SUNNY'
    }
]

export default WeatherData;