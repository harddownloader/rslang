const initialState = {
	userId: "605e409e5747abe9af64b684",
	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNWU0MDllNTc0N2FiZTlhZjY0YjY4NCIsImlhdCI6MTYxODQzMTY5MywiZXhwIjoxNjE4NDQ2MDkzfQ.oKjDGC59mjX1AKGrd0bE8i02873_MBh3SDSm2FsOK3o",
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
