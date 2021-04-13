import React from 'react'
import AreaChart from '@bit/recharts.recharts.area-chart'
import Area from '@bit/recharts.recharts.area'
import XAxis from '@bit/recharts.recharts.x-axis'
import YAxis from '@bit/recharts.recharts.y-axis'
import CartesianGrid from '@bit/recharts.recharts.cartesian-grid'
import Tooltip from '@bit/recharts.recharts.tooltip'
import { curveCardinal } from 'd3-shape'


const cardinal = curveCardinal.tension(0.2)

const RechartsProgress = ({ stats}) => {
	console.log('recharts', stats)

	const data = [
		{
			name: 'start',
			uv: 0,
		},
	]

	stats.map((item) => {
		const add = {
			name: item.dateTime,
			uv: item.games.audio.trueAnswer + item.games.myGame.trueAnswer + item.games.savana.trueAnswer + item.games.sprint.trueAnswer
		}
		data.push(add)
	})


	return (
		<>
			<AreaChart
				width={470}
				height={450}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Area
					type='monotone'
					dataKey='uv'
					stroke='#8884d8'
					fill='#8884d8'
					fillOpacity={0.3}
				/>
				<Area
					type={cardinal}
					dataKey='uv'
					stroke='#82ca9d'
					fill='#82ca9d'
					fillOpacity={0.3}
				/>
			</AreaChart>
		</>
	)
}

export default RechartsProgress
