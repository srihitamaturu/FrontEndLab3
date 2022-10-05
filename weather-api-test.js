import { WeatherAPI } from "../FrontEndLab/weather-api";

function testURLBuilder() {

    const weatherAPI = new WeatherAPI();
    weatherAPI.buildURL("Bangalore");
}


function testAPI1() {

    const weatherAPI = new WeatherAPI();

    weatherAPI.invoke("Bangalore")
        .then((responseJSON) => {

            console.log("------------------------");
            console.log(responseJSON);
        })
}

// testURLBuilder();

testAPI1();