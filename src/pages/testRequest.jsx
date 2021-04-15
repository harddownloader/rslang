import React, {useEffect} from 'react';

import {loginUser} from '@/utils/apiRequests/sign'
import {getAggregatedWords} from '@/utils/apiRequests/aggregatedWords'
import {getUserWords, setUserWords, updateUserWordsById} from '@/utils/apiRequests/userWords'

function TestRequest(props) {

  useEffect(async () => {
    const login = await loginUser({'email': 'john@gmail.com', 'password': 'qwerty1111'})
    await console.log('login', login)
    // const gettingWords = await getAggregatedWords(
    //   login.userId,
    //   login.token,
		// 	0,
		// 	false,
		// 	10,
		// 	// false
		// 	true
    // )
    // await console.log('gettingWords', gettingWords)

    


    const newWords = await getAggregatedWords(
      login.userId,
      login.token,
      0,
      false,
      60,
      // '{"userWord.difficulty":"easy"}'
      '{"userWord.optional.games.speaker.learned": false}',
    )
    console.log('newWords', newWords)
    
    // // ставим слова в словарь(чтобы быил доступны мини игры)
    // for(let i = 0; i<newWords[0].paginatedResults.length; i++) {
    //   setUserWords(
    //     login.userId,
    //     login.token,
    //     newWords[0].paginatedResults[i]._id,
    //     "easy",
    //     {
    //       // сколько раз пользователь правильно ответил на слово в мини играх
    //       correct_answers: 0,
    //       uncorrect_answers: 0,
    //       games: {
    //         'savannah': {
    //           learned: false
    //         },
    //         'sprint': {
    //           learned: false
    //         },
    //         'speaker': {
    //           learned: false
    //         },
    //         'my_game': {
    //           learned: false
    //         }
    //       }
    //     }
    //   )
    // }

    // const updating = await updateUserWordsById(
    //   login.userId,
    //   login.token,
    //   "5e9f5ee35eb9e72bc21af4ae", // wordId
    //   "easy",
    //   {
    //     correct_answers: 0,
    //     uncorrect_answers: 0,
    //     games: {
    //       'savannah': {
    //         learned: false
    //       },
    //       'sprint': {
    //         learned: false
    //       },
    //       'speaker': {
    //         learned: true
    //       },
    //       'my_game': {
    //         learned: false
    //       }
    //     }
    //   }
    // )

    // await console.log('updating', updating)


    // const userWords = await getUserWords(
    //   login.userId,
    //   login.token,
    // )
    // await console.log('userWords', userWords)


    // const newWords = await getAggregatedWords(
    //   login.userId,
    //   login.token,
    //   0,
    //   false,
    //   1,
    //   '"userWord.optional.games.speaker.learned": true'
    // )
    // console.log('newWords', newWords)

  }, [])

  return (
    <>
      test
    </>
  )
}

export default TestRequest
