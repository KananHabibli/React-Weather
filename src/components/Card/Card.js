import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: inline-block;
    width: 130px;
    height: 150px;
    border: 1px solid grey;
    padding: 10px 0;
    margin: 10px;

    &:hover{
        box-shadow: 3px 3px 3px 3px #666;
        cursor: pointer;
    }
`

const CardTitle = styled.div`
    text-align: center;
    font-weight: 500;
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

const CardMinTemp = styled.div`
    display: block;
    color: #777;
    font-size: 20px;
`
const CardMaxTemp = styled.div`
    display: block;
    color: #444;
    font-size: 20px;
`

const ImageContainer = styled.div`
    height: 100px;
    margin-top: 10px;
`

const Card = props => {
    return (
        <Div>
            <CardTitle>{props.date}</CardTitle>
            <ImageContainer>
                <CardImage src={' http://openweathermap.org/img/wn/' + props.icon + '@2x.png'} alt='Weather'/>
            </ImageContainer>
            <CardTemp>
                <CardMinTemp>{props.min} °</CardMinTemp>
                <CardMaxTemp>{props.max} °</CardMaxTemp>
            </CardTemp>
        </Div>
    )
}

export default Card
