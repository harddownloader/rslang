const initialState = {
  userId: "605e409e5747abe9af64b684",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNWU0MDllNTc0N2FiZTlhZjY0YjY4NCIsImlhdCI6MTYxODY4MDcxNSwiZXhwIjoxNjE4Njk1MTE1fQ.UvOfoXQVEOfJqyOi7jS9qrZsvykVt-4LG3aau7HSWgE"
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
