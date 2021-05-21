import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'
describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    // let n = 1
    // const fn = () => {
    //   n = 2
    // }
    const fn = jest.fn()
    const c = mount(<Icon name='user' onClick={fn} />)
    c.find('svg').simulate('click')
    // expect(n).toEqual(2)
    expect(fn).toBeCalled()
  })
})
