import React from "react"
import styled from "styled-components"

const HeadingAlpha = ({text}) => {
    return (
        <StyledH1>
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
`