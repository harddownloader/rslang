// Gets all user words
export async function getUserWords(userId, token) {
  
}

// Create a user word by id
export async function setUserWords(userId, token, wordId) {
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
        difficulty: 'easy',
        optional: {
          type: 'test',
        },
      }),
    },
  )
  const setUserWordsRes = await rawResponseSetUserWords.json()

  console.log('setUserWordsRes', setUserWordsRes)
}

// Gets a user word by id
export async function getUserWordsById(userId, token) {

}

// Updates a user word by id
export async function updateUserWordsById(userId, token) {

}

// Deletes user words by id
export async function deleteUserWordsById(userId, token) {

}

