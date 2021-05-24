import React, { useState } from 'react'
import './select.scss'

const Select = ({ setStats }) => {
	const [value, setValue] = useState(true)

	return (
		<>
			<div className='wrapperSelect'>
				<div className='select'>
					<select
						name='slct'
						id='slct'
						value={value}
						onChange={e => {
							console.log(typeof !!e.target.value, e.target.value)
							setValue(e.target.value)
							setStats()
						}}>
						<option disabled>Выберите опцию</option>
						<option defaultValue="true">
							Сегодня
						</option>
						<option value='false'>За все время</option>
					</select>
				</div>
			</div>
		</>
	)
}

export default Select
