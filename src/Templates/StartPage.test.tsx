import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { StartPageTemplate } from './StartPage'
import { Hero } from '../Organisms/Hero'
import { QuestionMarkBackGround } from '../Molecules/QuestionMarkBackGround'

Enzyme.configure({ adapter: new Adapter() })

describe('A StartPage template', () => {
  const callback = () => {
  }
  const wrapper = shallow(<StartPageTemplate onClickButton={callback}/>)

  it('should be rendered without no error', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('should have Hero organism', () => {
    expect(wrapper.find(Hero)).toHaveLength(1)
  })
  it('should have QuestionMarkBackGround organism', () => {
    expect(wrapper.find(QuestionMarkBackGround)).toHaveLength(1)
  })
})
