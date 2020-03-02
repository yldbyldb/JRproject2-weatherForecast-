import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';



class WeatherListTwitter extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <>
                <div className="card__content__twitter__header">
                    <h3><FontAwesomeIcon icon={faTwitter} /> &nbsp;&nbsp;Twitter Feed</h3>
                </div>
    
                <div className="card__content__twitter__content">
                    <div className="circle"></div>
                    <p>Don't Forget Your Sunscreen Tomorrow</p>
                </div>
    
                <div className="card__content__twitter__content">
                    <div className="circle"></div>
                    <p>Amazing Weather In Paris</p>
                </div>
            </>
        );
    
    }
}



export default WeatherListTwitter;