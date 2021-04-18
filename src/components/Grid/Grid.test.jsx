
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Grid from '@/components/footer/Grid'

describe('Grid', () => {
	it('should render correctly', () => {
		const output = shallow(<Grid />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
