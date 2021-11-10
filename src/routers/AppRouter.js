// Por convención se llama AppRouter para indicar que es el router principal de la aplicación

import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthContext from '../auth/AuthContext'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />

          {/* 1. */}
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter

/**
 * 1. Como en ese router estan todas las rutas que queremos proteger, solo debemos proteger ese componente.
 */
