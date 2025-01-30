import {GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const TransactionType= new GraphQLObjectType({
    name: 'Transaction',
    description: 'Transaction type',
    fields:() => ({
        id: {type: GraphQLID},
        value: {type: GraphQLString},
        date: {type: GraphQLString},
        type: {type: GraphQLString},
        status: {type: GraphQLString},
        user_id: {type: GraphQLString},
        destination_id: {type: GraphQLString},
        paymentMethod: {type: GraphQLString},
        evidence: {type: GraphQLString},
        category: {type: GraphQLString}
    })
})