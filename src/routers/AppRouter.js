// Por convención se llama AppRouter para indicar que es el router principal de la aplicación

import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AuthContext from '../auth/AuthContext'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />

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
