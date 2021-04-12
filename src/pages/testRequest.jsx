import React, { useEffect } from 'react'

import { loginUser } from '@/utils/apiRequests/words'

function TestRequest(properties) {
	useEffect(() => {
		const login = loginUser({ email: 'john@gmail.com', password: 'qwerty1111' })
		console.log(login)
	}, [])

	return <>test</>
}

export default TestRequest
