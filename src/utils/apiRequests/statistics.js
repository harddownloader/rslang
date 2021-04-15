// Gets statistics
export async function getStatistics(userId, token) {
  const rawResponseStatsGet = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/statistics`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  )

  const getStats = await rawResponseStatsGet.json()
  console.log('getStatistics', getStats)
  return getStats
}

// Upserts new statistics
export async function setStatistics(userId, token, learnedWords, optional) {
  const rawResponseStatsSet = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/statistics`,
    {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        learnedWords: learnedWords,
        optional: optional
      }),
    },
  )

  const setStats = await rawResponseStatsSet.json()
  console.log('setStatistics', setStats)
  return setStats
}
