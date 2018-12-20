import React from "react"
import styled from "styled-components"

const data = {
    "🐣": {
        "aria-label": "Hatching chick",
        url: "entry",
    },
    "🐒": {
        "aria-label": "Monkey",
        url: "intermediate",
    },
    "🦍": {
        "aria-label": "Gorilla",
        url: "advanced",
    },
}

const SelectWorkoutEmoji = ({ push, emoji, animationDelay = 0 }) => {
    return (
        <ButtonBox>
            <Button
                animationDelay={animationDelay}
                onClick={() => push(`/workouts/${data[emoji].url}`)}
            >
                <span
                    role="img"
                    aria-label={data[emoji]["aria-label"]}
                >
                    {emoji}
                </span>
            </Button>
        </ButtonBox>
    )
}

export default SelectWorkoutEmoji

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

animation-name: fade-in;
animation-duration: 0.75s;
animation-timing-function: ease;
animation-delay: ${props => props.animationDelay};
animation-fill-mode: backwards;
`