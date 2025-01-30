import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import TransactionPage from './pages/TransactionPage'
import  ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/signin' element= {<SignInPage />} />
          <Route path='/register' element= {<RegisterPage />} />
          <Route path='/signout' element= {<h1>SignOut</h1>} />
          <Route element= {<ProtectedRoute />}>
            <Route path='/transaction' element= {<TransactionPage />} />
            <Route path='/profile' element= {<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App