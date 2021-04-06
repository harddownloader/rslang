// Gets all user aggregated words
export async function getAggregatedWords(userId, token, group, page, wordsPerPage, filter) {
  // console.log('userId token', [userId, token])
  const rawResponseAggregate = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/AggregatedWords?group=${group}&wordsPerPage=${wordsPerPage}&page=${page}&filter=${filter}`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  )
  const getAggregatedWordsRes = await rawResponseAggregate.json()

  console.log('getNewWordsForUser', getAggregatedWordsRes)
  return getAggregatedWordsRes
}

// Gets a user aggregated word by id
export async function getAggregatedWordsById(userId, token, wordId) {
  // console.log('userId token', [userId, token])
  const rawResponseAggregate = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/AggregatedWords/${wordId}`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  )
  const getAggregatedWordsByIdRes = await rawResponseAggregate.json()

  console.log('getAggregatedWordsById', getAggregatedWordsByIdRes)
  return getAggregatedWordsByIdRes
}
