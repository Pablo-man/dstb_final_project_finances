import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import TransactionPage from './pages/TransactionPage'
import TransactionListPage from './pages/TransactionListPage'
import BeneficiaryFormPage from './pages/BeneficiaryFormPage'
import BeneficiaryPage from './pages/BeneficiaryPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { TransactionProvider } from './context/TransactionContext'
import Navbar from './components/Navbar'


function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/transactions' element={<TransactionListPage />} />
              <Route path='/transaction' element={<TransactionPage />} />
              <Route path='/beneficiaries' element={<BeneficiaryPage />} />
              <Route path='/beneficiary' element={<BeneficiaryFormPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TransactionProvider>
    </AuthProvider>
  )
}

export default App