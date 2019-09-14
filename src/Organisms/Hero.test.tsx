import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from 'grommet'
import { Hero } from './Hero'

Enzyme.configure({ adapter: new Adapter() })

describe('A Hero organism', () => {
  it('should have "遊ぶ" buttons', () => {
    expect(mount(<Hero onClickButton={() => {
    }}/>).find(Button).find({ label: '遊ぶ' }).exists()).toBe(true)
  })
  it('should have "このゲームについて" buttons', () => {
    expect(mount(<Hero onClickButton={() => {
    }}/>).find(Button).find({ label: 'このゲームについて' }).exists()).toBe(true)
  })
})
