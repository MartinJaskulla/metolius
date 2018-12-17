import React from "react"
import styled from "styled-components"

const ariaLabels = {
    "🐣": "Hatching chick",
    "🐒": "Monkey",
    "🦍": "Gorilla"
}

const CircleEmoji = ({ onClick, emoji}) => {
    return (
        <Container>
            <button onClick={onClick}><span role="img" aria-label={ariaLabels[emoji]}>{emoji}</span></button>
        </Container>
    )
}

export default CircleEmoji

const Container = styled.div`
width: 20vh;
height: 20vh;
outline: none;
position: relative;
border-radius: 50%;

&:hover > * {
    transform: translateY(-1rem) scale(1.02 )
}

@media only screen and (min-width: 900px) {
    & {
        width: 20vw;
        height: 20vw;
    }
}

button {    
    transition: transform .2s
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: .5vh solid #707070;
    padding: 0;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    
    &:focus {
        transform: translateY(-1rem) scale(1.02 )
    }
    @media only screen and (min-width: 900px) {
        & {
            border: .5vw solid #707070;
        }
    }
    
    span {
        font-size: 10vh;
        @media only screen and (min-width: 900px) {
            & {
                font-size: 10vw;
            }
        }
        border-radius: 50%;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display flex;
        justify-content: center;
        align-items: center;
    }
}
`
