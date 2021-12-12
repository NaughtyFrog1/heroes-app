import { mount } from 'enzyme'
import AuthContext from '../../../auth/AuthContext'
import LoginScreen from '../../../components/login/LoginScreen'
import types from '../../../types/types'

describe('test in LoginScreen', () => {
  const historyMock = {
    replace: jest.fn(),
  }
  const contextMock = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  }
  
  const wrapper = mount(
    <AuthContext.Provider value={contextMock}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  )
  const handleClick = wrapper.find('button').prop('onClick')


  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should call dispatch', () => {
    handleClick()
    expect(contextMock.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: 'Manuel' },
    })
  })

  test("should return to '/'", () => {
    handleClick()
    expect(historyMock.replace).toHaveBeenCalledWith('/')
  })
  
  test('should return to last path', () => {
    const lastPath = '/dc'
    localStorage.setItem('lastPath', lastPath)
    handleClick()
    expect(historyMock.replace).toHaveBeenCalledWith(lastPath)
  })
})
