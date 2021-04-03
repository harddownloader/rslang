import React, {useEffect} from 'react'

import Header from '@/components/header'
import Settings from '@/components/settings'

const SettingsPage = () => {

	const loginUser = async user => {
		const rawResponse = await fetch('http://localhost:4000/signin', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
		const content = await rawResponse.json();
	
		console.log('loginUser', content);

		const userSettings = await getSettings(content)
		const setUserSettings = await setSettings(content)
	};

	const getSettings = async ({userId, token}) => {
		console.log('userId token', [userId, token])
		const rawResponse = await fetch(`http://localhost:4000/users/${userId}/settings`, {
			method: 'GET',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
			}
		});
		const settings = await rawResponse.json();
	
		console.log('getSettings', settings);
	};

	const setSettings = async ({userId, token}) => {
		console.log('userId token', [userId, token])
		const rawResponseSet = await fetch(`http://localhost:4000/users/${userId}/settings`, {
			method: 'PUT',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"wordsPerDay": 1,
				"optional": {
					"type": "1"
				}
			})
		});
		const setSettingsReq = await rawResponseSet.json();
	
		console.log('setSettings', setSettingsReq);
	};
	
	useEffect(() => {
		loginUser({ "email": "john@gmail.com", "password": "qwerty1111" });
		
	}, []);

	return (
		<>
			<Header />
			<Settings />
		</>
	)
}

export default SettingsPage
