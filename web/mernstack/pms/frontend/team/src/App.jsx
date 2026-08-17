import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import ProtectedRoute from './utils/ProtectedRoute'
import AuthRoute from './utils/AuthRoute'
import Customers from './pages/customers/Customers'
import AddCustomer from './pages/customers/AddCustomer'
import EditCustomer from './pages/customers/EditCustomer'
import CustomerDetails from './pages/customers/CustomerDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route element={<AuthRoute />}>
          <Route path='/auth/register' element={<Register />}/>
          <Route path='/auth/login' element={<Login />}/>
          <Route path='/auth/forgot-password' element={<ForgotPassword />}/>
          <Route path='/auth/reset-password' element={<ResetPassword />}/>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Dashboard />}/>

          {/* customer routes */}
          <Route path='/customers' element={<Customers />}/>
          <Route path='/customers/add' element={<AddCustomer />}/>
          <Route path='/customers/:id/edit' element={<EditCustomer />}/>
          <Route path='/customers/:id/details' element={<CustomerDetails />}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App