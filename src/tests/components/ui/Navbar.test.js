import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router'
import AuthContext from '../../../auth/AuthContext'
import { Navbar } from '../../../components/ui/Navbar'
import types from '../../../types/types'

describe('tests in Navbar', () => {
  // Creamos un history mock para poder testearlo, ya que es lo que usa el useHistory
  // historyMock está formado por todos los elementos que necesita el useHistory para funcionar
  const historyMock = {
    location: {},
    push: jest.fn(),
    listen: jest.fn(),
    replace: jest.fn(),
    createHref: jest.fn(),
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'John Doe',
    },
  }

  afterEach(() => {
    // Al finalizar cada una de las pruebas es conveniente limpiar los mocks
    jest.clearAllMocks()
  })

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        {/* Pasamos el historyMock al router */}
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.navbar__name').text().trim()).toBe('John Doe')
  })

  test('should call logout and use history', () => {
    wrapper.find('.navbar__logout').prop('onClick')()
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout })
    expect(historyMock.replace).toHaveBeenCalledWith('login')
  })
})
