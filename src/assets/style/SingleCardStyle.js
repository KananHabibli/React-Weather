import styled from 'styled-components'


export const Div = styled.div`
    display: block;
    width: 35%;
    min-wdith: 20%;
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

export const CardTitle = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    margin-top: 10px;
    text-transform: uppercase
`
export const CardImage = styled.img`
    display: block;
    margin: 0 auto;
`

export const CardTemp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: no-wrap;

`

export const Temp = styled.div`
    display: inline-block;
    color: #777;
    font-size: 18px;
    text-align: center;
    width: 70px;
    min-width: 60px;
    padding: 30px 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    line-height: 1.4;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    margin: 30px ;

    & > div{
        margin: 0 20px
    }
`
export const ImageText = styled.p`
    text-align: center;
    color: #666;
    font-size: 17px;
`

export const CurrentTemp = styled.p`
    font-size: 20px;
    color: #222;
    text-align: right;
`

export const Humidity = styled.span`
    font-size: 17px;
    color: lightgrey;
    text-align: right;
`