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

import ZeroSecMp3 from "../../audio/0-sec.mp3"
import OneSecMp3 from "../../audio/1-sec.mp3"
import TwoSecMp3 from "../../audio/2-sec.mp3"
import ThreeSecMp3 from "../../audio/3-sec.mp3"
import HornWav from "../../audio/horn.wav"

import Board from "../Board";
import HeadingAlpha from "../HeadingAlpha"

const workouts = {
    entry: entryWorkout,
    intermediate: intermediateWorkout,
    advanced: advancedWorkout
}

const WorkoutPage = ({ match: { params } }) => {
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
        headingAlpha = params.workout + " routine"
        headingBeta = "🚀"
    }

    // Sounds
    const ZeroSecMp3Ref = useRef(new Audio(ZeroSecMp3))
    const OneSecMp3Ref = useRef(new Audio(OneSecMp3))
    const TwoSecMp3Ref = useRef(new Audio(TwoSecMp3))
    const ThreeSecMp3Ref = useRef(new Audio(ThreeSecMp3))
    const HornWavRef = useRef(new Audio(HornWav))

    // const lastExercise = exerciseIndex === workout.length - 1
    if (countdownSeconds === exercise.seconds + 5 && countdownActive) {
        headingBeta = "🚦🚦🚦🚦🚦"
        ThreeSecMp3Ref.current.play()
    }
    if (countdownSeconds === exercise.seconds + 4 && countdownActive) {
        headingBeta = "🚦🚦🚦🚦"
        ThreeSecMp3Ref.current.play()
    }
    if (countdownSeconds === exercise.seconds + 3 && countdownActive) {
        headingBeta = "🚦🚦🚦"
        ThreeSecMp3Ref.current.play()
    }
    if (countdownSeconds === exercise.seconds + 2 && countdownActive) {
        headingBeta = "🚦🚦"
        TwoSecMp3Ref.current.play()
    }
    if (countdownSeconds === exercise.seconds + 1 && countdownActive) {
        headingBeta = "🚦"
        OneSecMp3Ref.current.play()
    }
    // When exercise starts
    if (countdownSeconds === exercise.seconds && countdownActive) ZeroSecMp3Ref.current.play()
    // When exercise is done
    if (countdownSeconds === 0) {
        if (!nextExercise) {
            HornWavRef.current.play()
            pauseCountdown()
            headingAlpha = "Done!"
            headingBeta = "🎉🎉🎉"
        }
        else if (countdownActive && description !== "Rest" && nextExercise.description === "Rest") ZeroSecMp3Ref.current.play()
        if (nextExercise) {
            resetCountdown(nextExercise.seconds + (nextExercise.description === "Rest" ? -5 : 5)) // Problem if rest < 5
            setExerciseIndex(exerciseIndex + 1)
        }
    }

    // Render
    return (
        <StyledDiv>
            <Board active={hold} />
            <HeadingAlpha text={headingAlpha} />
            <StyledH2 onClick={toggleCountdown}>{headingBeta}</StyledH2>
        </StyledDiv>
    )
}

export default WorkoutPage

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
`