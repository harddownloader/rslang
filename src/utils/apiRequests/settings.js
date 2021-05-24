// Gets settings
export async function getSettings(userId, token) {
  const rawResponseStats = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/settings`,
    {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  )

  const needSettings = await rawResponseStatsGet.json()
  console.log('getSettings', needSettings)
  return needSettings
}

// Upserts new settings
export async function setSettings(userId, token, wordsPerDay, optional) {
  const rawResponseStatsSet = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/settings`,
    {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wordsPerDay: wordsPerDay,
        optional: optional,
      }),
    },
  )

  const setSettingsRes = await rawResponseStatsSet.json()
  console.log('setSettings', setSettingsRes)
  return setSettingsRes
}
