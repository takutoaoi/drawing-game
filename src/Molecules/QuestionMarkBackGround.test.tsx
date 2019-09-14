import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { QuestionMarkBackGround, QUESTION_MARK_COUNT } from './QuestionMarkBackGround'
import { QuestionMark } from '../Atoms/QuestionMark'

Enzyme.configure({ adapter: new Adapter() })

describe('A QuestionMarkBackGround molecule', () => {
  it('should have certain number of QuestionMark atoms', () => {
    expect(shallow(<QuestionMarkBackGround/>).find(QuestionMark)).toHaveLength(QUESTION_MARK_COUNT)
  })
})
