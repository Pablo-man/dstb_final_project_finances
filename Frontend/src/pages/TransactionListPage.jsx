import {useAuth} from '../context/AuthContext'
import { useEffect } from 'react'
import { useTransactions } from '../context/TransactionContext'


function TransactionListPage() {
    const {user, logout } = useAuth()
    const {listTransaction, transactions} = useTransactions()

    useEffect(() => {
        listTransaction(user.id)
    }, [])
    return(
        <div className="">
            {
                transactions.map((transaction) => (
                    <div className="">
                        <h1>{transaction.value}</h1>
                        <h1>{transaction.type}</h1>
                        <h1>{transaction.date}</h1>
                    </div>
                ))
            }
        </div>
    )
}
export default TransactionListPage