import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import PublicRoute from '../../routers/PublicRoute'

describe('test in <PublicRoute/>', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  }

  test('should render the component if it is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={false}
          component={() => <span>Test!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true)
  })

  test('should block the component if it is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={true}
          component={() => <span>Test!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(false)
  })
})
