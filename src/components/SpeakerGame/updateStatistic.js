import { getStatistics, setStatistics } from '@/utils/apiRequests/statistics'
import returnDate from '@/utils/returnDate'

const updateStatistic = async (userId, userToken) => {
	const thisDate = returnDate()
	const statData = await getStatistics(userId, userToken)
	console.log(statData.optional.dates.dateItems.indexOf(elem => elem.dateTime === thisDate))
}

export default updateStatistic
