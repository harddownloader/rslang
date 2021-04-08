// Gets all user aggregated words
export async function getAggregatedWords(userId, token, group, page, wordsPerPage, filter) {
  // console.log('userId token', [userId, token])

  let url = `https://rs-lang-app.herokuapp.com/users/${userId}AggregatedWords?`
  if(group) url += `group=${group}&`
  if(page) url += `page=${page}&`
  if(wordsPerPage) url += `wordsPerPage=${wordsPerPage}&`
  if(filter) url += `filter=${filter}&`

  const rawResponseAggregate = await fetch(
    url,
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

  console.log('getAggregatedWords', getAggregatedWordsRes)
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
