const StatisticReducer = (state, action) => {
	switch (action.type) {
		case 'DECREMENT_CORRECT':
			return {
				...state,
				currentAnswer: state.currentAnswer + 1,
				series: state.series + 1,
				exp: state.exp + 5,
				answer: state.answer + 1,
			}
		case 'DECREMENT_ERRORS':
			return {
				...state,
				series: 0,
				errorAnswer: state.errorAnswer + 1,
				answer: state.answer + 1,
			}
		case 'BEST_SERIES':
			return {
				...state,
				bestSeries: state.series,
			}
		default:
			throw new Error('err')
	}
}

export default StatisticReducer
