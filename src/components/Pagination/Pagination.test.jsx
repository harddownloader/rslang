
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Pagination from '@/components/footer/Pagination'

describe('Pagination', () => {
	it('should render correctly', () => {
		const output = shallow(<Pagination />)
		expect(shallowToJson(output)).toMatchSnapshot()
	})
})
