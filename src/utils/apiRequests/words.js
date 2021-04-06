// Gets a chunk of words
export async function getWords( token, group, page ) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/words?group=${group}&page=${page}`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  )
  const newWords = await rawResponse.json()

  console.log('getWords', newWords)
  return newWords
}

// Gets a word with assets by id
export async function getWordById( token, wordId ) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/words/${wordId}`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  )
  const needWordById = await rawResponse.json()

  console.log('getWordById', needWordById)
  return needWordById
}
