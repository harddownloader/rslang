const getAllUserWords = async () => {
	const response = await fetch('https://rs-lang-app.herokuapp.com/words')

	const content = await response.json()
	for (const element of content) {
		console.log(element.word)
	}
	return content

	/* returns array of words */
}

export default getAllUserWords
