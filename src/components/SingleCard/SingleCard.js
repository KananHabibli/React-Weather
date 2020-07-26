import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'


const Div = styled.div`
    display: block;
    width: 40%;
    min-wdith: 35%;
    height: 360px;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px 0;
    margin: 20px auto;

    &:hover{
        box-shadow: 3px 3px 3px 3px #666;
        cursor: pointer;
    }

    &:hover, &:hover div, &:hover p{
        background-color: #14bdee;
        color: #fff;
    }
`

const CardTitle = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    margin-top: 10px;
    text-transform: uppercase
`
const CardImage = styled.img`
    display: block;
    margin: 0 auto;
`

const CardTemp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: no-wrap;

`

const Temp = styled.div`
    display: inline-block;
    color: #777;
    font-size: 18px;
    text-align: center;
    width: 50px;
    padding: 30px 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    line-height: 1.1;
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    margin: 30px ;

    & > div{
        margin: 0 20px
    }
`
const ImageText = styled.p`
    text-align: center;
    color: #666;
    font-size: 17px;
`

const CurrentTemp = styled.p`
    font-size: 20px;
    color: #222;
    text-align: right;
`

const Humidity = styled.span`
    font-size: 14px;
    color: lightgrey;
    text-align: right;
`

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
                <Temp>Min {props.location.state.min}°</Temp>
                <Temp>Max {props.location.state.max}°</Temp>
                <Temp>Morn {props.location.state.morn}°</Temp>
                <Temp>Evening {props.location.state.eve}°</Temp>
                <Temp>Night {props.location.state.night}°</Temp>
            </CardTemp>
        </Div>
    )
}

export default withRouter(SingleCard)
