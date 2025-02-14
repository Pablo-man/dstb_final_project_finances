import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth()

    console.log(loading, isAuthenticated)

    if(loading) return <h1>loading ...</h1>
    if(!isAuthenticated && !loading) return <Navigate to="/signin" replace />
    return (
        <Outlet />
    )
}
export default ProtectedRoute