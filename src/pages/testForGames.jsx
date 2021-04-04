import React, {useEffect} from 'react'

import Header from '@/components/header'
// import Settings from '@/components/settings'

const testForGames = () => {

	const loginUser = async user => {
		const rawResponse = await fetch('https://rs-lang-app.herokuapp.com/signin', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		const content = await rawResponse.json()
	
		console.log('loginUser', content)

		// const userSettings = await getUserWords(content)
		// const setUserSettings = await setUserWords(content)
    // const getNewWords = await getNewWordsForUser(content)
    const getAggregate = await getAggregatedWords({
      userId: content.userId,
      token: content.token,
      lvl: 3
    })

    const setNewUserWords = await setUserWords({
      userId: content.userId,
      token: content.token,
      wordId: getAggregate[0]['paginatedResults'][0]['_id']
    })
	};

  // setUsersWords = sync () => {

// https://rs-lang-app.herokuapp.com/users/605e409e5747abe9af64b684%E2%80%8B/words/5e9f5ee35eb9e72bc21afbb6
  //"605e409e5747abe9af64b684"

  /**
   * 0 запихнуть слова в словарь(60 слов)
   * 1 авторизация
   * 2 получаем слова пользователя из его словоря - если 
   * 
   */

	// const getUserWords = async ({userId, token}) => {
	// 	console.log('userId token', [userId, token])
	// 	const rawResponse = await fetch(`https://rs-lang-app.herokuapp.com/​/words`, {
	// 		method: 'GET',
	// 		withCredentials: true,
	// 		headers: {
	// 			'Authorization': `Bearer ${token}`,
	// 			'Accept': 'application/json',
	// 		}
	// 	});
	// 	const settings = await rawResponse.json();
	
	// 	console.log('getSettings', settings);
	// };
  
  const getNewWordsForUser = async ({userId, token}) => {
    // console.log('userId token', [userId, token])
		const rawResponse = await fetch(`https://rs-lang-app.herokuapp.com/words?group=1`, {
			method: 'GET',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
			}
		})
		const newWords = await rawResponse.json()
	
		console.log('getNewWordsForUser', newWords)
  }

	const getStatistics = async ({userId, token}) => {
		const rawResponseStats = await fetch(`https://rs-lang-app.herokuapp.com/users/${userId}/statistics`, {
			method: 'GET',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
			}
		})

		const getStats = await rawResponseStatsGet.json()
		console.log('stats', getStats)
    return getStats;
	}

	const setStatistics = async ({userId, token}) => {
		const rawResponseStatsSet = await fetch(`https://rs-lang-app.herokuapp.com/users/${userId}/statistics`, {
			method: 'PUT',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'learnedWords': 1,
				'optional': {
					'type': '1'
				}
			})
		})

		const setStats = await rawResponseStatsSet.json()
		console.log('stats', setStats)
    return setStats;
	}

  const getAggregatedWords = async ({userId, token, lvl}) => {
    // console.log('userId token', [userId, token])
		const rawResponseAggregate = await fetch(`https://rs-lang-app.herokuapp.com/users/${userId}/AggregatedWords?wordsPerPage=60&group=${lvl}`, {
			method: 'GET',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
			}
		})
		const getAggregatedWordsRes = await rawResponseAggregate.json()
	
		console.log('getNewWordsForUser', getAggregatedWordsRes)
    return getAggregatedWordsRes;
  }


	const setUserWords = async ({userId, token, wordId}) => {
		// console.log('userId token', [userId, token])
    console.log('params', {userId, token, wordId})
		const rawResponseSetUserWords = await fetch(`https://rs-lang-app.herokuapp.com/users/${userId}/words/${wordId}`, {
			method: 'POST',
			withCredentials: true,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        "difficulty": "easy",
        "optional": {
          "type": 'test'
        }
      })
		})
		const setUserWordsRes = await rawResponseSetUserWords.json()
	
		console.log('setUserWordsRes', setUserWordsRes)
	}
	
	useEffect(() => {
		loginUser({ "email": "john@gmail.com", "password": "qwerty1111" })
	}, [])

	return (
		<>
			<Header />
			{/* <Settings /> */}
		</>
	)
}

export default testForGames
