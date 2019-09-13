import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import { Spinner } from './Spinner'

Enzyme.configure({ adapter: new Adapter() })

describe('A spinner atom', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Spinner/>).text() === '')
  })
})
