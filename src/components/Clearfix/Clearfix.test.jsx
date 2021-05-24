
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Clearfix from '@/components/footer/Clearfix'

describe('Clearfix', () => {
	it('should render correctly', () => {
		const output = shallow(<Clearfix />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
