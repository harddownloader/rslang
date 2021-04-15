import React from 'react'
import GroupedBarChart from '@bit/kendopunk.charts.grouped-bar-chart'

const Diagrama = ({ stats }) => {

	console.log('diagrama', stats)

	const chartData = [
	]

	stats.map((item) => {
		debugger
		const add = {
			time: item.dateTime,
			table: 'word',
			value: item.games.audio.trueAnswer + item.games.myGame.trueAnswer + item.games.savana.trueAnswer + item.games.sprint.trueAnswer,
			color: '#fc3',
		}
		chartData.push(add)
	})

	const tickFormatter = n => String(n)

	return (
		<div>
			<GroupedBarChart
				chartData={chartData}
				canvasWidth="470"
				canvasHeight="450"
				labelMetric="table"
				linearMetric="value"
				lnearTickFormat={tickFormatter}
				ordinalMetric="time"
			/>
		</div>
	)
}

export default Diagrama
