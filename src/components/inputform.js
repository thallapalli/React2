import React from 'react';

const Form = (props) => { 

    return (
        <div>
            <form onSubmit={props.loadWeather}>
                <input type="text" name="city" placeholder="Choose a city"/><br></br>
                <input type="text" name="country" placeholder="Choose a country"/><br/>
                <button>Get My Weather</button>
            </form>
        </div>

    );
}

export default Form;