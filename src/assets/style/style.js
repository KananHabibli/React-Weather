import styled from 'styled-components'


export const Div = styled.div`
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

export const CardTitle = styled.div`
    text-align: center;
    font-weight: 500;
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

export const CardMinTemp = styled.div`
    display: block;
    color: #777;
    font-size: 20px;
`
export const CardMaxTemp = styled.div`
    display: block;
    color: #444;
    font-size: 20px;
`

export const ImageContainer = styled.div`
    height: 100px;
    margin-top: 10px;
`

export const Nav = styled.div`
    background-color: #14bdee;
    text-align:center;
    text-transform: uppercase;
    font-size: 20px;
    padding: 20px;

    a{
        color: #fff;
        text-decoration: none;
        // height: inherit;
        padding: inherit;
    }

    a:hover{
        background-color: #fff;
        color:  #14bdee;
    }

`