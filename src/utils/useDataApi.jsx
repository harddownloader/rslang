import { useEffect, useReducer, useState } from 'react'
import dataFetchReducer from './dataFetchReducer'

const useDataApi = (startFunc, initialValues, initialData) => {
	const [url, setUrl] = useState(startFunc)

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initialData,
	})

	useEffect(() => {
		let didCancel = false

		const fetchData = async () => {
			dispatch({ type: 'FETCH_INIT' })

			try {
				const result = await startFunc(...initialValues)

				console.log(result[0].paginatedResults)

				if (!didCancel) {
					dispatch({
						type: 'FETCH_SUCCESS',
						payload: result[0].paginatedResults,
					})
				}
			} catch {
				if (!didCancel) {
					dispatch({ type: 'FETCH_FAILURE' })
				}
			}
		}

		fetchData()

		return () => {
			didCancel = true
		}
	}, [url])

	return [state, setUrl]
}

export default useDataApi
