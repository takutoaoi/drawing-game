import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { QuestionMark } from './QuestionMark'
import { Help } from 'grommet-icons'

Enzyme.configure({ adapter: new Adapter() })

describe('A QuestionMark atom', () => {

    it('should render with Help component', () => {
        expect(shallow(<QuestionMark size={1}/>).find(Help)).toHaveLength(1)
    })
})
