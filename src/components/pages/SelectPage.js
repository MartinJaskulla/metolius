import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import entry from "../../workouts/entry"
import intermediate from "../../workouts/intermediate"
import advanced from "../../workouts/advanced"
import WorkoutRow from "./WorkoutRow";
import { db } from "../../Firestore"
import Context from "../../Context";

const defaultWorkouts = [entry, intermediate, advanced]


const SelectPage = () => {
    const {state, dispatch} = useContext(Context)

    useEffect(() => {
        db
            .collection("users")
            .doc("rrI6Cs7uUWn66ddmEGwh")
            .collection("workouts")
            .get()
            .then(snapshot => snapshot.forEach(doc => dispatch({ type: "ADD_WORKOUT", workout: doc.data() })))
    }, [])

    return (
        <FlexColumn>
            <StyledH1>Select Workout</StyledH1>
            <WorkoutRow workouts={defaultWorkouts} />
            <WorkoutRow workouts={state.workouts} animationDelay={0.75} />
        </FlexColumn>
    )
}

const StyledH1 = styled.h1`
margin: 0;
font-weight: 400;
backface-visibility: hidden;
font-size: 9vw;

animation-name: fade-in;
animation-duration: 2s;
animation-timing-function: ease;
animation-fill-mode: backwards;
`
const FlexColumn = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default SelectPage

