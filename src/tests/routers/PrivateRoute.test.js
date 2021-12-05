import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import PrivateRoute from '../../routers/PrivateRoute'

describe('tests in <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  }

  // Convertimos el setItem de localStorage en una función de jest
  Storage.prototype.setItem = jest.fn()

  test('should render the component if it is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Test!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true)
  })

  test('should save the last path in localStorage', () => {
    mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Test!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      props.location.pathname
    )
  })

  test('should block the component if it is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Test!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(false)
  })
  
})

/**
 * <MemoryRouter> nos permite realizar test sobre <Route>. Como <Route> no puede ser utilizado si no está dentro de un <Router>, lo simulamos con <MemoryRouter>
 *
 * shallow solo renderiza el higher order component, no renderiza sus hijos, por lo que para realizar pruebas sobre <PrivateRoute> debemos utilizar `mount`
 *
 * El redirect es un string vacio
 */
