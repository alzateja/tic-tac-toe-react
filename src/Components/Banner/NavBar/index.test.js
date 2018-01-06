import React from 'react'
import { shallow } from 'enzyme'
import NavBar from './index'

function setup() {
  return shallow(<NavBar />)
}

describe('NavBar', () => {
  it('4 Link tags', () => {
    const wrapper = setup()
    expect(wrapper.find('Link').length).toBe(4)
  })
})
