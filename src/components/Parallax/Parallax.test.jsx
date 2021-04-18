
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Paralax from '@/components/footer/Paralax'

describe('Paralax', () => {
	it('should render correctly', () => {
		const output = shallow(<Paralax />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
