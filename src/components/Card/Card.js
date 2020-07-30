import React from 'react'

import {
    Div, 
    CardTitle,
    CardImage,
    CardTemp,
    CardMinTemp,
    CardMaxTemp,
    ImageContainer
} from '../../assets/style/style'



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
