import React, { useEffect, useState } from 'react'

export default function Timer(properties) {
	const [time, setTime] = useState(properties.sec)
	if (time === 0) properties.lose('lose')
	useEffect(() => {
		function counter() {
			if (time !== 0) setTime(time - 1)
			return time
		}
		const timer = setInterval(() => {
			counter(time)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [time])
	return <span className={properties.cls}>{time}</span>
}
