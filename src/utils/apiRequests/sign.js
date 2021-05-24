// Logins a user and returns a JWT-token
export async function loginUser(userLogginAndPassword) {
  const rawResponse = await fetch(
    'https://rs-lang-app.herokuapp.com/signin',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogginAndPassword),
    },
  )

  const user = await rawResponse.json()

  console.log('loginUser', user)
  return user
}
