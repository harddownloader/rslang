// Gets all user words
export async function getUserWords(userId, token) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/words`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    },
  )

  const words = await rawResponse.json()

  console.log('getUserWordsById', words)
  return words
}

// Create a user word by id
export async function setUserWords(userId, token, wordId, difficulty, optional) {
  console.log('params', { userId, token, wordId })
  const rawResponseSetUserWords = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        difficulty: difficulty,
        optional: optional,
      }),
    },
  )
  const setUserWordsRes = await rawResponseSetUserWords.json()

  console.log('setUserWords', setUserWordsRes)
  return setUserWordsRes
}

// Gets a user word by id
export async function getUserWordsById(userId, token, wordId) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    },
  )

  const word = await rawResponse.json()

  console.log('getUserWordsById', word)
  return word
}

// Updates a user word by id
export async function updateUserWordsById(userId, token, wordId, difficulty, optional) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        difficulty: difficulty,
        optional: optional
      }),
      // {
      //   "difficulty": "string",
      //   "optional": {}
      // }
    },
  )

  const word = await rawResponse.json()

  console.log('updateUserWordsById', word)
  return word
}

// Deletes user words by id
export async function deleteUserWordsById(userId, token) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    },
  )

  const word = await rawResponse.json()

  console.log('deleteUserWordsById', word)
  return word
}

