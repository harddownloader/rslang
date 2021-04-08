// Gets a chunk of words
export async function getWords( group, page ) {
  let url = 'https://rs-lang-app.herokuapp.com/words?'
  if(group) url += `group=${group}&`
  if(page) url += `page=${page}`

  const rawResponse = await fetch(
    url,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    },
  )
  const newWords = await rawResponse.json()

  console.log('getWords', newWords)
  return newWords
}

// Gets a word with assets by id
export async function getWordById( wordId ) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/words/${wordId}`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    },
  )
  const needWordById = await rawResponse.json()

  console.log('getWordById', needWordById)
  return needWordById
}
