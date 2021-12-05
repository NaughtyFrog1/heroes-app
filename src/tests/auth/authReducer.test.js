import authReducer from '../../auth/authReducer'
import types from '../../types/types'

describe('tests in authReducer', () => {
  test('should return the default state', () => {
    expect(authReducer({ logged: false }, {})).toEqual({ logged: false })
  })

  test('should authenticate and set the user name', () => {
    expect(
      authReducer(
        { logged: false },
        { type: types.login, payload: { name: 'Manuel' } }
      )
    ).toEqual({ logged: true, name: 'Manuel' })
  })

  test('should remove the user name and set logged to false', () => {
    expect(
      authReducer(
        { logged: true, name: 'Manuel' },
        { type: types.logout }
      )
    ).toEqual({ logged: false})
  })
})

/**
 * Como el reducer es una función pura no necesitamos importar nada
 */
