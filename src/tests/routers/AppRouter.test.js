import { mount } from 'enzyme'
import AuthContext from '../../auth/AuthContext'
import AppRouter from '../../routers/AppRouter'

describe('tests in AppRouter', () => {
  test('should render login if not logged in', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    }

    // Como el <AppRouter /> está dentro de un high order component debemos utilizar `mount` en lugar de `shallow`
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

  test('should render marvel component if authenticated', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'John Doe',
      },
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper.find('.navbar').exists()).toBe(true)
  })
})
