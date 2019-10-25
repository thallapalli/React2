import React from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/inputform';
import Weather from './components/weather';

// function App() {
//   return (
//     <div>
//           <Header/>
//           <Form/>
//     </div>
//   );
// }
const api_key = "ee86181caf0c648d40360ee246068d2d";

class App extends React.Component {

  //initial state of the data
  state = {

    temparature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }

getWeather = async (event) => { 

const city = event.target.elements.city.value;
const country = event.target.elements.country.value;


event.preventDefault();

// API Call

const api_call = //await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${api_key}');
await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=ee86181caf0c648d40360ee246068d2d`);

const response = await api_call.json();

//alert(response);

if(city && country) {
 this.setState({
    
    temparature: response.main.temp,
    city: response.name,
    country: response.sys.country,
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    icon: response.weather[0].icon,
    description: response.weather[0].description,
    error: ""


 })

}else {
  this.setState({
    error: "Please provide required input .... "

  });
}

}

render (){
    return (
    <div className="appstlye">
          <Header/>
          <Form loadWeather={this.getWeather}/>
          <Weather temparature={this.state.temparature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          icon={this.state.icon}
          description={this.state.description}
          error={this.state.error}/>
    </div>
  );
}

}

export default App;
