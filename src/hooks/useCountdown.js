import { useState, useEffect, useRef } from 'react'

export default function useCountdown(s) {
    const [seconds, setSeconds] = useState(s)
    const [countdownActive, setCountdownActive] = useState(false)

    const intervalRef = useRef()
    const timestampRef = useRef()

    const startCountdown = () => {
        if (!intervalRef.current) {
            timestampRef.current = new Date().getTime()
            intervalRef.current = setInterval(() => subtractOneSecond(), 1000)
            setCountdownActive(true)
        }
    }

    const subtractOneSecond = () => {
        const now = new Date().getTime()
        const distance = now - timestampRef.current
        const seconds = Math.round((distance % (1000 * 60)) / 1000)
        setSeconds(prevSeconds => prevSeconds - seconds)
        timestampRef.current = now
    }

    const pauseCountdown = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = undefined
            setCountdownActive(false)
        }
    }

    const resetCountdown = (seconds) => setSeconds(seconds)

    // Unmount
    useEffect(() => pauseCountdown, [])

    return { countdownSeconds: seconds, countdownActive, startCountdown, pauseCountdown, resetCountdown }
}