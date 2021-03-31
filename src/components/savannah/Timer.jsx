import React, { useEffect, useState } from 'react'

export default function Timer(properties) {
    const [time, setTime] = useState(properties.sec)
    useEffect(() => {
        function counter(time) {
            if (time == 0) return undefined
            setTime(time - 1)
        }
        let timer = setInterval(() => {
            counter(time)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [time])
    time == 0 ? properties.lose('lose') : undefined
    return (
        <span className={properties.cls}>
            {time}
        </span>
    )
}