
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import CustomInput from '@/components/footer/CustomInput'

describe('CustomInput', () => {
	it('should render correctly', () => {
		const output = shallow(<CustomInput />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
