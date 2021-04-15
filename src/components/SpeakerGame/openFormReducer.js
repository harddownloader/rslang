const openFormReducer = (state, action) => {
	switch (action.type) {
		case 'OPEN_ALL':
			return {
				...state,
				isChecked: true,
				open: true,
			}
		case 'SET_ERROR':
			return {
				...state,
				isErrors: true,
			}
		case 'SET_CLOSE':
			return {
				...state,
				open: false,
			}
		case 'END_GAME':
			return {
				...state,
				isEndGame: true,
			}
		default:
			throw new Error('err')
	}
}

export default openFormReducer
