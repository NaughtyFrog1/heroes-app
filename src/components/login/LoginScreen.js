import React, { useContext } from 'react'
import AuthContext from '../../auth/AuthContext'
import types from '../../types/types'

const LoginScreen = ({ history }) => {  // 1.
  const { dispatch } = useContext(AuthContext)
  
  const handleClickLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'

    dispatch({ type: types.login, payload: { name: 'Manuel' } })
    history.replace(lastPath) // 2.
  }

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClickLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginScreen

/**
 * 1. El componente tiene varias props incrustadas por defecto por react-router,
 * history es una de ellas. Podemos verlas desde la vista de componentes en
 * chrome
 *
 * 2. Con `history.replace(url)' reemplazamos la entrada en el historial de la
 * pestaña, haciendo que no se pueda volver para atras.
 */
