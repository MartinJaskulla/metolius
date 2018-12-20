import React from "react"
import styled from "styled-components"

const HeadingAlpha = ({ text, animationDelay = 0 }) => {
    return (
        <StyledH1 animationDelay={animationDelay}>
            {text}
        </StyledH1>
    )
}

export default HeadingAlpha

const StyledH1 = styled.h1`    
    font-size: 6vw;
    font-family: 'Luckiest Guy', cursive;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    margin: 0rem;

    animation-name: fade-in;
    animation-duration: 0.75s;
    animation-timing-function: ease;
    animation-delay: ${props => props.animationDelay};
    animation-fill-mode: backwards;
`