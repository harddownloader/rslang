
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Badge from '@/components/footer/Badge'

describe('Badge', () => {
	it('should render correctly', () => {
		const output = shallow(<Badge />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
