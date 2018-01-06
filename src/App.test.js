import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import App from './App'
import initialState from './store/initialState'

describe('It should render the App', () => {
  const mockStore = configureStore()
  let wrapper

  beforeEach(() => {
    const store = mockStore(initialState)
    wrapper = shallow(<App store={store} />)
  })

  it('renders without crashing', () => {
    console.log(wrapper)
  })
})

