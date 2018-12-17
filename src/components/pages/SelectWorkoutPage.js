import React from "react"
import styled from "styled-components"

const SelectWorkoutPage = props => {
    return (
        <StyledLayout>
            <StyledH1>Choose your Workout!</StyledH1>
            <StyledBottomRow>
                <StyledButtonContainer>
                    <StyledButton onClick={() => props.history.push("/workouts/entry")}><span role="img" aria-label="Hatching chick">🐣</span></StyledButton>
                </StyledButtonContainer>
                <StyledButtonContainer>
                    <StyledButton onClick={() => props.history.push("/workouts/intermediate")}><span role="img" aria-label="Monkey">🐒</span></StyledButton>
                </StyledButtonContainer>
                <StyledButtonContainer>
                    <StyledButton onClick={() => props.history.push("/workouts/advanced")}><span role="img" aria-label="Gorilla">🦍</span></StyledButton>
                </StyledButtonContainer>
            </StyledBottomRow>
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
height: 100vh;
padding: 1rem;
box-sizing: border-box;
background: #15246d;
display: flex;
flex-direction: column;
justify-content: space-evenly;
-webkit-justify-content: space-evenly;
align-items: center;
`
const StyledH1 = styled.h1`
font: 5vh Bangers, Arial;
color: #fff;
text-shadow: .08em .08em 0 rgba(0, 0, 0, 0.7);
transform: skew(0, -4deg);
margin: 0rem;
align-self: center;

@media only screen and (min-width: 900px) {
    & {
        font: 7.6vw Bangers, Arial;
    }
  }
`

const StyledBottomRow = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
-webkit-justify-content: space-between;

@media only screen and (min-width: 900px) {
    & {
        width: 65vw;
        flex-direction: row;
    }
  }
`

const StyledButtonContainer = styled.div`
outline: none;
&:hover > * {
    transform: translateY(-1rem) scale(1.02 )
} 
`

const StyledButton = styled.button`
font-size: 15vh;
background: none;
border: none;
padding: 0;
cursor: pointer;
outline: none;
text-decoration: none;
transition: transform .2s

&:focus {
    transform: translateY(-1rem) scale(1.02 )
}

@media only screen and (min-width: 900px) {
    & {
        font-size: 10vw;
    }
  }
`

export default SelectWorkoutPage
