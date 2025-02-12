import {GraphQLList, GraphQLString} from 'graphql'
import { TransactionType } from './types.js'
import Transaction from '../model/Transaction.js'

export const transaction= {
    type: new GraphQLList(TransactionType),
    description: "Retrieves a list of transactions",
    resolve: () => Transaction.find()
}

export const transactions= {
    type: new GraphQLList(TransactionType),
    description: 'Return only one transaction',
    args:{
        id: {type: GraphQLString}
    },
    resolve: (_, {id}) => Transaction.find({user_id: id}).exec()
}