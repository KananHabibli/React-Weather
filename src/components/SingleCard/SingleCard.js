import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    Div,
    CardTitle,
    CardImage,
    CardTemp,
    Temp,
    ImageContainer,
    ImageText,
    CurrentTemp,
    Humidity
} from '../../assets/style/SingleCardStyle'

const SingleCard = props => {
    console.log(props)
    return (
        <Div>
            <CardTitle>{props.location.state.date}</CardTitle>
            <ImageContainer>
                <div>
                    <CardImage src={' http://openweathermap.org/img/wn/' + props.location.state.icon + '@2x.png'} alt='Weather'/>
                    <ImageText>{props.location.state.condition}</ImageText>
                </div>
                <div>
                    <CurrentTemp>{props.location.state.day}°</CurrentTemp>
                    <Humidity>Humidity: {props.location.state.humidity} %</Humidity>
                </div>
            </ImageContainer>
            <hr />
            <CardTemp>
                <Temp>Minimum {props.location.state.min}°</Temp>
                <Temp>Maximum {props.location.state.max}°</Temp>
                <Temp>Morning {props.location.state.morn}°</Temp>
                <Temp>Evening {props.location.state.eve}°</Temp>
                <Temp>Night {props.location.state.night}°</Temp>
            </CardTemp>
        </Div>
    )
}

export default withRouter(SingleCard)
