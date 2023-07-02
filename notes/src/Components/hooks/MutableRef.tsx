import React from 'react'
import { useState, useRef, useEffect } from "react"

const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null)
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])
    const stopTimer = () => {
        if(intervalRef.current){
            window.clearInterval(intervalRef.current)
        }
    }
    return (
        <div>
            Hook Timer - {timer} - <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}

export default MutableRef