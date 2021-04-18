
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CustomTabs from '@/components/footer/CustomTabs'

describe('CustomTabs', () => {
	it('should render correctly', () => {
		const output = shallow(<CustomTabs />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
