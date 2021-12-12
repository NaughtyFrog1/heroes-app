import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router'
import SearchScreen from '../../../components/search/SearchScreen'

describe('test in SearchScreen', () => {
  test('should render properly with default values', () => {
    const wrapper = mount(
      // Con initialEntries indicamos la ruta en la que estamos por defecto
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('should show a hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?query=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('input').prop('value')).toBe('batman')
    expect(wrapper).toMatchSnapshot()
  })

  test('should show an error message', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?query=fooBar']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('input').prop('value')).toBe('fooBar')
    expect(wrapper).toMatchSnapshot()
  })

  test('should call history.push', () => {
    const historyMock = {
      push: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?query=fooBar']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchValue',
        value: 'batman',
      },
    })

    wrapper.find('form').prop('onSubmit')({ preventDefault() {} })

    expect(historyMock.push).toHaveBeenCalledWith('?query=batman')
  })
})
