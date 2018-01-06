import React from 'react'
import { shallow } from 'enzyme'
import Banner from './index'

function setup() {
  return shallow(<Banner />)
}

describe('Banner', () => {
  it('renders img and h1', () => {
    const wrapper = setup()
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('img').length).toBe(1)
  })

  it('h1 populates with message', () => {
    const message = 'Tic Tac Toe Game - Pet Edition'
    const wrapper = setup(message)

    expect(wrapper.find('h1').text()).toBe(message)
  })
})
