import React from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"
import LinkButton from "../LinkButton";
import Board from "../Board";

const Exercise = (props) => {
    return (
        <Draggable
            draggableId={props.exercise.id}
            index={props.index}
        >
            {
                (provided, snapshot) => (
                    <Li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <div>
                            <Board active={props.exercise.holds} />
                        </div>
                        <div>
                            <div>
                                {props.exercise.description}
                            </div>
                            <div>
                                {props.exercise.duration}⏱
                            </div>

                        </div>
                        <div>
                            <StyledLinkButton to="/workouts/exercise">
                                ✏️
                            </StyledLinkButton>
                        </div>
                    </Li>
                )
            }
        </Draggable>
    )
}

const Li = styled.li`
display: flex;

> div:first-child {
    width: 40%;
}
> div:last-child {
    background: red;
}

> div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: sans-serif;

    > div:nth-child(2) {
        font-family: Arial;
    }
}

> div:nth-child(2) {
    padding-left: 20px;
    text-align: left;
}

svg {
    height: 100%;
    width: 100%;
}

        border-radius: 10px;
padding: 10px;
margin-bottom: 8px;
background-color: ${props =>
        props.isDragDisabled
            ? "lightgrey"
            : props.isDragging
                ? "lightgreen"
                : "orange"
    }
color: #000;
box-sizing: border-box;
width: 400px;
height: 75px;
max-width: 100%;

:focus {
    outline: none;
    box-shadow: 0 0 0 5px hotpink;
}
`

const StyledLinkButton = styled(LinkButton)`
background: green;
:focus {
    transform: translateY(-5px) scale(1.05);
}
`

export default Exercise