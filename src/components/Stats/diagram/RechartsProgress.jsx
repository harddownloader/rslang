import React from 'react'
import AreaChart from '@bit/recharts.recharts.area-chart'
import Area from '@bit/recharts.recharts.area'
import XAxis from '@bit/recharts.recharts.x-axis'
import YAxis from '@bit/recharts.recharts.y-axis'
import CartesianGrid from '@bit/recharts.recharts.cartesian-grid'
import Tooltip from '@bit/recharts.recharts.tooltip'
import { curveCardinal } from 'd3-shape'

const data = [
	{
		name: 'Mon',
		uv: 26,
	},
	{
		name: 'Tue',
		uv: 34,
	},
	{
		name: 'Wed',
		uv: 39,
	},
	{
		name: 'Thu',
		uv: 52,
	},
	{
		name: 'Fri',
		uv: 102,
	},
	{
		name: 'Sat',
		uv: 64,
	},
	{
		name: 'Sun',
		uv: 64,
	},
]

const cardinal = curveCardinal.tension(0.2)

const RechartsProgress = () => {
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
