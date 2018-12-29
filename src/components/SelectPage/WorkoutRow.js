import React, { useContext } from "react"
import styled from "styled-components"
import LinkButton from './LinkButton'

const WorkoutRow = ({ workouts, animationDelay = 0 }) => {
    if (workouts.length < 3) {
        workouts = [...workouts, { emoji: "➕", title: "add"}]
    }

    return (
        <FlexContainer  >
            {workouts.map((workout, index) => {
                return (
                    <HoverContainer key={index}>
                        <LinkButton
                            to={`/workouts/${workout.title.replace(/\s+/g, '')}`}
                            animationDelay={(index / 4 + animationDelay) + "s"}
                        >
                            <Emoji role="img">{workout.emoji}</Emoji>
                        </LinkButton>
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

export default WorkoutRow