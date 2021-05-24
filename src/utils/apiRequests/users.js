// Creates a new user
export async function createUser(token, userLogginAndPassword) {
  const rawResponse = await fetch(
    'https://rs-lang-app.herokuapp.com/users',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogginAndPassword),
      // {
      //   "name": "string",
      //   "email": "string",
      //   "password": "string"
      // }
    },
  )

  const user = await rawResponse.json()

  console.log('createUser', user)
  return user
}

// Gets user
export async function getUser(userId, token) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    },
  )

  const user = await rawResponse.json()

  console.log('getUser', user)
  return user
}

// Update a user
export async function updateUser(userId, token, userLogginAndPassword) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userLogginAndPassword),
      // {
      //   "email": "string",
      //   "password": "string"
      // }
    },
  )

  const user = await rawResponse.json()

  console.log('updateUser', user)
  return user
}

// Delete a user
export async function deleteUser(userId, token) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )

  const user = await rawResponse.json()

  console.log('deleteUser', user)
  return user
}

// Get new user tokens
export async function refreshTockenUser(userId, token) {
  const rawResponse = await fetch(
    `https://rs-lang-app.herokuapp.com/users/${userId}/tokens`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    },
  )

  const user = await rawResponse.json()

  console.log('refreshTockenUser', user)
  return user
}
