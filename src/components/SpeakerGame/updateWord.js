// castom Api
import { updateUserWordsById } from '@/utils/apiRequests/userWords'

//----------------------------------------------------------------
const updateWord = (
	userId,
	userToken,
	formState,
	data,
	statistic,
	dispatchStatistic,
	dispatch,
) => {
	if (formState.values.word === data.word) {
		dispatchStatistic({ type: 'DECREMENT_CORRECT' })
		statistic.series >= statistic.bestSeries &&
			dispatchStatistic({ type: 'BEST_SERIES' })
		updateUserWordsById(userId, userToken, data._id, data.userWord.difficulty, {
			...data.userWord.optional,
			correct_answers: data.userWord.optional.correct_answers + 1,
			games: {
				...data.userWord.optional.games,
				speaker: {
					learned: true,
				},
			},
		})
	} else {
		dispatchStatistic({ type: 'DECREMENT_ERRORS' })
		dispatch({ type: 'SET_ERROR' })
		updateUserWordsById(userId, userToken, data._id, data.userWord.difficulty, {
			...data.userWord.optional,
			uncorrect_answers: data.userWord.optional.uncorrect_answers + 1,
		})
	}
}

export default updateWord
