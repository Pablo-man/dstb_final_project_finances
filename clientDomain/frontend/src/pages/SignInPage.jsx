import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

function SignInPage(){

    const {register, handleSubmit, formState: {errors}} = useForm();
    const { signin, errors:signInErrors, isAuthenticated  } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data)
    })
    useEffect(() => {
        if(isAuthenticated) navigate("/transactions")
    }, [isAuthenticated])

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md my-2'>
                <h1 className='text-2xl font-bold'>Inicio de sesión</h1>
                {
                    signInErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="email" {... register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="User Email"/>
                    {errors.email && (
                        <p className="text-red-500">Email is required</p>
                    )}
                    <input type="password" {...register("password", {required:true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="User Email"/>
                    {errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    <button type="submit">Ingresar</button>
                </form>
                <p>
                    ¿No tienes una cuenta? {" "}
                    <Link to="/register" className="text-sky-500">
                    Registro de usuario
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default SignInPage;