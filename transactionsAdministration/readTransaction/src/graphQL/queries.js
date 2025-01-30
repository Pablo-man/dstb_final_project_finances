import {GraphQLList, GraphQLID} from 'graphql'
import { TransactionType } from './types.js'
import Transaction from '../model/Transaction.js'

export const transactions= {
    type: new GraphQLList(TransactionType),
    description: "Retrieves a list of transactions",
    resolve: () => Transaction.find()
}

export const transaction= {
    type: TransactionType,
    description: 'Return only one transaction',
    args:{
        id: {type: GraphQLID}
    },
    resolve: (_, {id}) => Transaction.findById(id)
}