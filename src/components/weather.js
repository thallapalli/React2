import React from 'react';

const Weather = (props) => { 

    return (
        <div>
            {props.country && props.city && <p> Location: {props.city},{props.country}</p>}
            {props.temparature && <p> Temp: {props.temparature}</p>}
            {props.humidity && <p> Humidity: {props.humidity}</p>}
            {props.pressure && <p> Pressure: {props.pressure}</p>}
            {props.icon &&<img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon"></img> }
            {props.description && <p> Weather condition: {props.description}</p>}
            {props.error && <p> {props.error}</p>}
        </div>

    );
}

export default Weather;