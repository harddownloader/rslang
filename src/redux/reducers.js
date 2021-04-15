const initialState = {
	userId: null,
	token: null ,
}

export function getUserAuth(state = initialState, action) {
	switch (action.type) {
		case 'SET_USER_AUTH':
			console.log('reducers getUserAuth action', action)
			return {
				...state,
				userId: action.userAuth.userId,
				token: action.userAuth.token,
			}
		default:
			return state
	}
}
