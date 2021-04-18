
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SnackbarContent from '@/components/footer/SnackbarContent'

describe('SnackbarContent', () => {
	it('should render correctly', () => {
		const output = shallow(<SnackbarContent />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
