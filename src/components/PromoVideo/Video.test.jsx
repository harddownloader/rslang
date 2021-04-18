
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Video from '@/components/footer/Video'

describe('Video', () => {
	it('should render correctly', () => {
		const output = shallow(<Video />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
