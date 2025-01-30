import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext.jsx'
import { useEffect } from "react";
import {useNavigate, Link} from 'react-router-dom'

function RegisterPage(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const { signup, isAuthenticated, errors:registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated) navigate("/profile")
    }, [isAuthenticated])

    const onSubmit = handleSubmit( async (values) =>{
        signup(values)
    })

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
                <h1 className="text-2xl font-bold">Registro de usuario</h1>
                {
                    registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="text" {... register("name", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="User Name"/>
                    {errors.name && (
                        <p className="text-red-500">Username is required</p>
                    )}
                    <input type="text" {... register("lastname", {required:true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="User LastName"/>
                    {errors.lastname && (
                        <p className="text-red-500">Lastname is required</p>
                    )}
                    <input type="email" {... register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="User Email"/>
                    {errors.email && (
                        <p className="text-red-500">Email is required</p>
                    )}
                    <input type="password" {...register("password", {required:true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="User Email"/>
                    {errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    <button type="submit">Crear</button>
                </form>
                <p>
                    ¿Ya tienes una cuenta? {" "}
                    <Link to="/signin" className="text-sky-500">
                    Inicio de sesión
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterPage;