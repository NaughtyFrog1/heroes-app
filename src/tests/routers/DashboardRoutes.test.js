import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import AuthContext from '../../auth/AuthContext'
import DashboardRoutes from '../../routers/DashboardRoutes'

describe('tests in DashboardRoutes', () => {
  test('should render properly', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'John Doe',
      },
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
