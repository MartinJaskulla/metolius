import React from "react"
import styled from "styled-components"

const SelectWorkoutPage = props => {
    return (
        <Layout>
            <H1>Choose your Workout!</H1>
            <Div>
                <ButtonBox>
                    <Button onClick={() => props.history.push("/workouts/entry")}><span role="img" aria-label="Hatching chick">🐣</span></Button>
                </ButtonBox>
                <ButtonBox>
                    <Button onClick={() => props.history.push("/workouts/intermediate")}><span role="img" aria-label="Monkey">🐒</span></Button>
                </ButtonBox>
                <ButtonBox>
                    <Button onClick={() => props.history.push("/workouts/advanced")}><span role="img" aria-label="Gorilla">🦍</span></Button>
                </ButtonBox>
            </Div>
        </Layout>
    )
}

const Layout = styled.div`
height: 100vh;
padding: 5vh;
box-sizing: border-box;
background: #1fb990;
position: relative;
`
const H1 = styled.h1`
height: 45vh;
line-height: 50vh;
text-align: center;
font-family: Bangers, Arial;
font-size: 8vw;
font-weight: 100;
color: #fff;
margin: 0rem;
`

const Div = styled.div`
height: 45vh;
width: 65vw;
position: absolute;
left: 50%;
transform: translateX(-50%);
`

const ButtonBox = styled.div`
display: inline-block;
position: absolute;
top: 50%;
transform: translateY(-50%);
:nth-child(1) {
    
}
:nth-child(2) {
    left: 50%;
    transform: translate(-50%, -50%);
}
:nth-child(3) {
    right: 0;
    transform: translate(0, -50%);
}

outline: none;
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

&:focus {
    transform: translateY(-1rem) scale(1.02 )
}
`

export default SelectWorkoutPage
