// const getAllUserWords = async () => {
// 	const response = await fetch('https://rs-lang-app.herokuapp.com/words')

// 	const content = await response.json()
// 	for (const element of content) {
// 		console.log(element.word)
// 	}
// 	return content

// 	/* returns array of words */
// }

// export default getAllUserWords()

export function randomArray(array){
	let index
	let temporary
	for (let index_ = array.length - 1; index_ > 0; index_ -= 1) {
		index = Math.floor(Math.random() * (index_ + 1))
		temporary = array[index]
		array[index] = array[index_]
		array[index_] = temporary
	}
	return array
}

