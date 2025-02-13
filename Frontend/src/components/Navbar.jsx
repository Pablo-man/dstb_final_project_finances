import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {useForm} from 'react-hook-form'

function Navbar() {
    const {isAuthenticated, logout, user} = useAuth()
    const {handleSubmit} = useForm()

    const onSubmit = handleSubmit( async () =>{
        await logout()
    })

    return(
        <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to="/">
            <h1 className='text-2xl font-bold'>Administrador de finanzas</h1>
            </Link>
            <ul className='flex gap-x-2'>
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido! {user.username}
                        </li>
                        <li>
                            <Link to="/" onClick={onSubmit} className="bg-indigo-500 px-4 py-1 rounded-md">Cerrar Sesión</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/signin" className="bg-indigo-500 px-4 py-1 rounded-md">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-md">Registrarse</Link>
                        </li>
                    </>
                )
                
                }
            </ul>
        </nav>
    )
}
export default Navbar