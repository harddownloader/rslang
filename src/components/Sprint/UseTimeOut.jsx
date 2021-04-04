import React, {
	useRef,
	// useState,
	useEffect,
	// useContext,
	// useMemo,
	// useReducer,
} from 'react'

function useTimeout(callback, delay) {
	const savedCallback = useRef()

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the timeout.
	useEffect(() => {
		const id = setTimeout(() => {
			savedCallback.current()
		}, delay)
		return () => clearTimeout(id)
	}, [delay])
}

export default useTimeout
