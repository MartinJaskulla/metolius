import React from "react"
import styled from "styled-components"
import HeadingAlpha from "../HeadingAlpha";
import SelectWorkoutEmoji from "../SelectWorkoutEmoji";

const SelectWorkoutPage = props => {
    return (
            <CenterBox>
                <HeadingAlpha text="Choose your Workout!"/>
                <div>
                    <SelectWorkoutEmoji emoji="🐣" animationDelay="0.5s" push={props.history.push} />
                    <SelectWorkoutEmoji emoji="🐒" animationDelay="0.75s" push={props.history.push} />
                    <SelectWorkoutEmoji emoji="🦍" animationDelay="1s" push={props.history.push} />
                </div>
            </CenterBox>
    )
}

const CenterBox = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 80vw;

div:first-child {
    margin-top: 10vh;
}
`

const ButtonBox = styled.div`
display: inline-block;
outline: none;

:not(:last-child) {
    margin-right: 14vw;
}

&:hover > * {
    transform: translateY(-1rem) scale(1.02 )
} 
`

const Button = styled.button`
font-size: 10vw;
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
`

export default SelectWorkoutPage
