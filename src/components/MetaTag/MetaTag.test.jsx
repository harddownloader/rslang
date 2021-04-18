
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import MetaTag from '@/components/footer/MetaTag'

describe('MetaTag', () => {
	it('should render correctly', () => {
		const output = shallow(<MetaTag />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
