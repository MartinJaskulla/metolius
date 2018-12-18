import React from "react"
import styled from "styled-components"

const SelectWorkoutPage = props => {
    return (
        <Layout>
            <CenterBox>
                <H1>Choose your Workout!</H1>
                <div>
                    <ButtonBox>
                        <Button onClick={() => props.history.push("/workouts/entry")}><span role="img" aria-label="Hatching chick">🐣</span></Button>
                    </ButtonBox>
                    <ButtonBox>
                        <Button onClick={() => props.history.push("/workouts/intermediate")}><span role="img" aria-label="Monkey">🐒</span></Button>
                    </ButtonBox>
                    <ButtonBox>
                        <Button onClick={() => props.history.push("/workouts/advanced")}><span role="img" aria-label="Gorilla">🦍</span></Button>
                    </ButtonBox>
                </div>
            </CenterBox>
        </Layout>
    )
}

const Layout = styled.div`
height: 100vh;
padding: 5vh;
box-sizing: border-box;
background: #15246d;
position: relative;
text-align: center
`

const CenterBox = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 80vw;
`

const H1 = styled.h1`
font-family: Bangers, Arial;
font-size: 8vw;
font-weight: 100;
color: #fff;
margin: 0rem;
margin-bottom: 10vh;
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

&:focus {
    transform: translateY(-1rem) scale(1.02 )
}
`

export default SelectWorkoutPage
