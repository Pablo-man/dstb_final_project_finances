import {useEffect} from 'react'
import {useForm} from 'react-hook-form'

function TransactionPage() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    const types = ["Egreso","Ingreso"]
    const methods = ["Efectivo","Transferencia","Cheque","Debito","Credito"]
    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
                <h1 className="text-2xl font-bold">Nueva transaccion</h1>
                <form onSubmit={onSubmit}>
                    <div className="flex space-x-2  ">
                        <input type="text" placeholder='Valor' {...register("value", {required:true})} className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus />
                        {errors.value && (
                            <p className='text-red-500'>El valor es requerido</p>
                        )
                        }
                        <input type="date" placeholder='Fecha' {...register("date", {required:true})} className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                        {errors.date && (
                            <p className='text-red-500'>Ingrese la fecha de la transferencia</p>
                        )
                        }
                    </div>
                    <select name="" id="" {...register("type",{required:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' >
                        <option value="">Tipo Transferencia</option>
                        {types.map((type, index)=>(
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {errors.type && (
                        <p className='text-red-500'>Ingrese el tipo de la transferencia</p>
                    )
                    }
                    <input type="text" placeholder='Origen/Destino' {...register("destination_id", {required:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                    {errors.destination_id && (
                        <p className='text-red-500'>Ingrese el destino u origen de la transferencia</p>
                    )
                    }
                    <select name="" id="" {...register("paymentMethod", {required:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' >
                        <option value="">Forma de pago</option>
                        {methods.map((method, index)=>(
                            <option key={index} value={method}>{method}</option>
                        ))}
                    </select>
                    {errors.paymentMethod && (
                        <p className='text-red-500'>Es necesario saber la forma de pago</p> 
                    )
                    }
                    <input type="file" placeholder='Evidencia' {...register("evidence")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                    <input type="text" placeholder='Categoria' {...register("category_user_id", {required:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                    {errors.category_user_id && (
                        <p className='text-red-500'>La categoria es requerida</p>
                    )
                    }
                    <button type="submit">Crear</button>
                </form>
            </div>
        </div>
    )
}
export default TransactionPage