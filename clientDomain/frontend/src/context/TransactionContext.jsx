import { createContext, useContext, useState } from "react";
import { listTransactions, registerTransaction, resgisterImage } from '../api/transactions'

const TransactionContext = createContext()

export const useTransactions = () => {
    const context = useContext(TransactionContext)
    if (!context) {
        throw new Error("useTransactions must be used within a TransactionProvider")
    }
    return context
}

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    const createTransaction = async (transaction) => {
        try{
            const url = await resgisterImage(transaction.evidence[0])
            transaction.evidence = url.resultURL
            const res = await registerTransaction(transaction)
            console.log(res)
        }catch (error) {
            console.log(error)
        }
    }
    const listTransaction = async (data) => {
        try{
            const res = await listTransactions(data)
            setTransactions(res)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                createTransaction,
                listTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}