import { createContext, useContext, useState } from "react";
import { registerBeneficiary, listBeneficiaries } from '../api/beneficiaries'

const BeneficiaryContext = createContext()

export const useBeneficiaries = () => {
    const context = useContext(BeneficiaryContext)
    if (!context) {
        throw new Error("useBeneficiaries must be used within a BeneficiaryProvider")
    }
    return context
}

export const BeneficiaryProvider = ({ children }) => {
    const [beneficiaries, setBeneficiaries] = useState([])

    const createBeneficiary = async (beneficiary) => {
        try{
            const res = await registerBeneficiary(beneficiary)
            console.log(res)
        }catch (error) {
            console.log(error)
        }
    }
    const listBeneficiary = async (data) => {
        try{
            const res = await listBeneficiaries(data)
            setBeneficiaries(res)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <BeneficiaryContext.Provider
            value={{
                beneficiaries,
                createBeneficiary,
                listBeneficiary,
            }}
        >
            {children}
        </BeneficiaryContext.Provider>
    )
}