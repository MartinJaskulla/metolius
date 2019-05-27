/*
 title muss unique sein, weil er als url genutzt wird
 max 3 custom workouts oder select
 */

import React, { useState } from "react"
import styled from "styled-components"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import Exercise from "./Exercise"
import uuidv4 from "uuid/v4"

const AddWorkout = () => {
    const [title, setTitle] = useState("")
    // Make it a dictionary
    const [exercises, setExercises] = useState([
        {
            description: "Rest",
            holds: "Seven",
            duration: 30,
            id: uuidv4()
        },
    ])

    const onDragEnd = ({ destination, source, draggableId, type }) => {
        // Return if dragged outside of DragDropContext or dragged to original place
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return

        const draggedExercise = { ...exercises[source.index] }
        const newExercises = [...exercises]
        newExercises.splice(source.index, 1)
        newExercises.splice(destination.index, 0, draggedExercise)
        setExercises(newExercises)
    }

    const addExercise = () => {
        setExercises(exercises => {
            return [
                ...exercises,
                {
                    description: "Rest",
                    holds: null,
                    duration: 30,
                    id: uuidv4()
                },
            ]
        })
    }

    return (
        <form autoComplete="off">
            <StyledInput
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId="list"
                >
                    {provided => (
                        // removemargin li für exercises
                        <StyledUl
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {exercises.map((exercise, index) => <Exercise exercise={exercise} index={index} key={exercise.id} />)}
                        </StyledUl>
                    )}
                </Droppable>
            </DragDropContext>
            <ButtonContainer>
                <Button onClick={addExercise} type="button">➕ Add new Exercise</Button>
                <input type="submit" value="✅" />
            </ButtonContainer>
        </form>
    )
}

export default AddWorkout

const Button = styled.button`
border: none;
cursor: pointer;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
background-color: white;
display: flex;
text-align: center;
color: #000;
box-sizing: border-box;
width: 300px;
max-width: 100%;
:focus {
    outline: none;
    box-shadow: 0 0 0 5px hotpink;
}
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

input {
    background: none;
    border: none;
    font-size: 2vw;

}
`

const StyledUl = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledInput = styled.input`
background: none;
border: none;

font-size: 6vw;
font-family: 'Luckiest Guy', cursive;
font-weight: 400;
text-transform: uppercase;
color: #fff;
text-align: center;

::placeholder {
    font-size: inherit;
}

:-webkit-autofill,
:-webkit-autofill:hover, 
:-webkit-autofill:focus, 
:-webkit-autofill:active  {
    background: none;
    -webkit-box-shadow: 0 0 0 0 white inset;
}

&:focus{
    background: none;
}
`