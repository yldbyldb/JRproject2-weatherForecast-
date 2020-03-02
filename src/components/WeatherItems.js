import React from 'react';


class WeatherItems extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ul>
                <li key={this.props.id}>{this.props.weekday}</li>
                <li className="card_content__5Days__icon" key={this.props.id}>{this.props.icon}</li>
                <li key={this.props.id}>{this.props.degree}&deg;</li>
                <li className="card_content__5Days__weather" key={this.props.id}>{this.props.weather}</li>
            </ul>
        )
    
    }
}




export default WeatherItems;