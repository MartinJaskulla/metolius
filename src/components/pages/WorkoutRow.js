import React, { useContext } from "react"
// import { Link } from "react-router-dom"
import Context from "../../Context";
import styled from "styled-components"



const WorkoutRow = ({ workouts, animationDelay = 0 }) => {
    if (workouts.length < 3) {
        workouts = [...workouts, { emoji: "➕" }]
    }

    return (
        <FlexContainer  >
            {workouts.map((workout, index) => {
                return (
                    <HoverContainer key={index}>
                        <StyledButton animationDelay={(index / 4 + animationDelay) + "s"}>
                            <Emoji role="img">{workout.emoji}</Emoji>
                        </StyledButton>
                    </HoverContainer>
                )
            })}
        </FlexContainer>
    )
}

const Emoji = styled.span`
font-size: 10vw;
`
const FlexContainer = styled.div`
width: 70vw;
position: relative;
@media only screen and (max-width: 1000px) {
    margin-top: 8vh;
}
`

const HoverContainer = styled.div`
&:nth-child(1) {
  float: left;
}
&:nth-child(2) {
position: absolute;
left: 50%;
transform: translateX(-50%);
}
&:nth-child(3) {
    float: right;
}

&:hover > * {
    transform: translateY(-1rem) scale(1.02 )
} 
`

const StyledButton = styled.button`
background: none;
border: none;
padding: 0;
cursor: pointer;
outline: none;
text-decoration: none;
transition: transform .2s

@media only screen and (min-width: 1000px) {
    &:focus {
        transform: translateY(-1rem) scale(1.02 )
    }
}

animation-name: fade-in;
animation-duration: 0.75s;
animation-timing-function: ease;
animation-delay: ${props => props.animationDelay};
animation-fill-mode: backwards;
`

export default WorkoutRow