import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { MatchingPageTemplate } from './MatchingPage'
import { MatchingStatus } from '../Organisms/MatchingStatus'
import { MatchingServerStatus } from '../utils/defenitions'

Enzyme.configure({ adapter: new Adapter() })

describe('A MatchingPage template', () => {
  const wrapper = shallow(<MatchingPageTemplate />)
  it('should be rendered without no error', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('should have MatchingStatus organism', () => {
    expect(wrapper.find(MatchingStatus)).toHaveLength(1)
  })
})
