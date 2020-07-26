import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Card from '../components/Card/Card'

let WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const CardContainer = styled.div`
    width: 70%;
    margin: 100px auto;
`

const Title = styled.div`
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    margin: 50px 0;
`

class Weather extends Component {

    state = {
        weather : []
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.3945713&lon=49.7847483&exclude=hourly,minutely&appid=4ca933b85d2162350f1542a5a93c8d62&units=metric')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            let i = 0
            data.daily.map(current => {
                let today = ''
                let day = new Date()
                let date = (day.getDay() + i) % 7
                if( i === 0 ) today = 'Today'
                else today =  WEEK[date]
                this.setState(prevState => ({
                    weather: [...prevState.weather, {dt: today,
                            minTemp: current.temp.min,
                            maxTemp: current.temp.max , 
                            icon: current.weather[0].icon, 
                            day: current.temp.day, 
                            eve: current.temp.eve,
                            morn:  current.temp.morn, 
                            night: current.temp.night, 
                            condition: current.weather[0].main,
                            humidity: current.humidity }]
                }))
                i++
            })
        })
        .catch(console.log(new Error()))
    }

    render() {
        return (
            <div>
                <Title>Weather</Title>
                <CardContainer>
                    {this.state.weather.map((data, index) => (
                        <Link key={index} to={{
                            pathname: '/' + data.dt,
                            state: {date:  data.dt,
                                    min:   data.minTemp,
                                    max:   data.maxTemp,
                                    icon:  data.icon,
                                    day:   data.day,
                                    eve:   data.eve,
                                    morn:  data.morn,
                                    night: data.night,
                                    condition: data.condition,
                                    humidity: data.humidity}
                        }}>
                            <Card date={data.dt} min={data.minTemp} max={data.maxTemp} icon={data.icon} />                        
                        </Link>
                    ))}
                </CardContainer>
            </div>
        )
    }
}

export default Weather
