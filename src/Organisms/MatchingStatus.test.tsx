import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { MatchingStatus, statusText } from './MatchingStatus'
import { MatchingServerStatus } from '../utils/defenitions'

Enzyme.configure({ adapter: new Adapter() })

describe('A MatchingStatus organism', () => {
  it('should be mounted with no error', () => {
    expect(shallow(<MatchingStatus status={MatchingServerStatus.Error} />).exists()).toBe(true)
  })
  it('should be have certain text depends on status', () => {
    const status = MatchingServerStatus.Error
    expect(shallow(<MatchingStatus status={status}/>).find('.statusText').childAt(0).text()).toEqual(statusText[status])
  })
})
