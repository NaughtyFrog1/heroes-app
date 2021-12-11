import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router'
import HeroScreen from '../../../components/heroes/HeroScreen'

describe('tests in HeroScreen', () => {
  test('should display <Redirect /> if there are no arguments in the url', () => {
    const historyMock = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    )
    expect(wrapper.find('Redirect').exists()).toBe(true)
  })

  test('should render a hero if the url exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('.row').exists()).toBe(true)
  })

  test('should return to main screen using Push', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        {/* Usamos un arrow function para poder enviar la prop history */}
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )
    wrapper.find('button').prop('onClick')()
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })

  test('should return to previous screen using goBack', () => {
    const historyMock = {
      length: 5,
      push: jest.fn(),
      goBack: jest.fn(),
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )
    wrapper.find('button').prop('onClick')()
    expect(historyMock.goBack).toHaveBeenCalled()
    expect(historyMock.push).not.toHaveBeenCalled()
  })
  
  test('should call redirect if heroId does not exist', () => {
    const historyMock = {
      length: 5,
      push: jest.fn(),
      goBack: jest.fn(),
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/some-id']}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )
    expect(wrapper.text()).toBe('')
  })
})
