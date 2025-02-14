import { useForm } from 'react-hook-form'
import {useBeneficiaries} from '../context/BeneficiaryContext'
import {useNavigate} from 'react-router-dom'

function BeneficiaryFormPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createBeneficiary } = useBeneficiaries()
    const navigate = useNavigate()

    const onSubmit = handleSubmit( async (data) => {
        const res = createBeneficiary(data)
        navigate("/beneficiaries")
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
                <h1 className="text-2xl font-bold">Nuevo Beneficiario/Deudor</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='Nombre' {...register("name", { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                    {errors.name && (
                        <p className='text-red-500'>El nombre es requerido</p>
                    )
                    }
                    <input type="text" placeholder='Descripción' {...register("description", { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                    {errors.description && (
                        <p className='text-red-500'>La descripción es requerida</p>
                    )
                    }
                    <button type="submit">Crear</button>
                </form>
            </div>
        </div>
    )
}
export default BeneficiaryFormPage