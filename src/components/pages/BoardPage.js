/*
mehrere exercises hintereinander, rest zeiht nicht oft genug -5 ab. Auch wenn eine Minute nur aus 2 repetitions bestehen (advanced min4).
advanced hat campus to different hold. flag: getready: false in json?
Click anywhere to start/pause When two exercises dont have a rest between them: 2 sounds played at same time exerciseDone und getReady firstBeep!
Leertaste Pause detecten, focus button on start emoji. Tab Focus auch für start?
*/

//  no flexbox, audio, emojis same size ( replace vw with formula) (audio stop previous one? before playing next manually?)
// 


import React, { useState, useRef } from "react"
import useCountdown from "../../hooks/useCountdown"
import styled from "styled-components"
import entryWorkout from "../../workouts/entry"
import intermediateWorkout from "../../workouts/intermediate"
import advancedWorkout from "../../workouts/advanced"

import startAudio from "../../audio/start.mp3"
import beepAudio from "../../audio/beep.mp3"
import doneAudio from "../../audio/done.mp3"

import Board from "../Board";
import HeadingAlpha from "../HeadingAlpha"

const workouts = {
    entry: entryWorkout,
    intermediate: intermediateWorkout,
    advanced: advancedWorkout
}

const BoardPage = ({ match: { params } }) => {
    const [exerciseIndex, setExerciseIndex] = useState(0)
    const [started, setStarted] = useState(false)

    const workout = workouts[params.workout]
    const exercise = workout[exerciseIndex]
    const nextExercise = workout[exerciseIndex + 1]
    let { hold, description } = exercise

    const { countdownSeconds, countdownActive, startCountdown, pauseCountdown, resetCountdown } = useCountdown(exercise.seconds + 5)
    const toggleCountdown = () => {
        if (!started) setStarted(true)
        countdownActive ? pauseCountdown() : startCountdown()
    }

    let headingAlpha = countdownSeconds <= exercise.seconds ? countdownSeconds : description
    let headingBeta
    if (description === "Rest") headingBeta = "😴"
    if (description !== "Rest") headingBeta = "⏱"
    if (!countdownActive) headingBeta = "⏸️"
    if (countdownSeconds > exercise.seconds && countdownActive) headingBeta = "🚦"
    if (!started) {
        hold = null
        headingAlpha = params.workout + " routine"
        headingBeta = "🚀"
    }

    // Sounds
    const startAudioRef = useRef(new Audio(startAudio))
    const beepAudioRef = useRef(new Audio(beepAudio))
    const doneAudioRef = useRef(new Audio(doneAudio))

    // const lastExercise = exerciseIndex === workout.length - 1
    if (countdownSeconds === exercise.seconds + 5 && countdownActive) {
        headingBeta = "🚦🚦🚦🚦🚦"
        beepAudioRef.current.play()
    }
    if (countdownSeconds === exercise.seconds + 4 && countdownActive) {
        headingBeta = "🚦🚦🚦🚦"
        beepAudioRef.current.play()
    }
    if (countdownSeconds === exercise.seconds + 3 && countdownActive) {
        headingBeta = "🚦🚦🚦"
        beepAudioRef.current.play()
    }
    if (countdownSeconds === exercise.seconds + 2 && countdownActive) {
        headingBeta = "🚦🚦"
        beepAudioRef.current.play()
    }
    if (countdownSeconds === exercise.seconds + 1 && countdownActive) {
        headingBeta = "🚦"
        beepAudioRef.current.play()
    }
    // When exercise starts
    if (countdownSeconds === exercise.seconds && countdownActive) startAudioRef.current.play()
    // When exercise is done
    if (countdownSeconds === 0) {
        if (!nextExercise) {
            doneAudioRef.current.play()
            pauseCountdown()
            headingAlpha = "Done!"
            headingBeta = "🎉🎉🎉"
        }
        else if (countdownActive && description !== "Rest" && nextExercise.description === "Rest") startAudioRef.current.play()
        if (nextExercise) {
            resetCountdown(nextExercise.seconds + (nextExercise.description === "Rest" ? -5 : 5)) // Problem if rest < 5
            setExerciseIndex(exerciseIndex + 1)
        }
    }

    // Render
    return (
        <StyledDiv>
            <Board active={hold} />
            <HeadingAlpha animationDelay="0.25s" text={headingAlpha} />
            <StyledH2 animationDelay="0.5s"onClick={toggleCountdown}>{headingBeta}</StyledH2>
        </StyledDiv>
    )
}

export default BoardPage

const StyledDiv = styled.div`
width: 100%;
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    svg {
        width: 80%;
    }
`

const StyledH2 = styled.h2`
    font-size: calc(3vw + 1vh);
    margin: 0rem;
    cursor: pointer;
    
    animation-name: fade-in;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: ${props => props.animationDelay};
    animation-fill-mode: backwards;
`