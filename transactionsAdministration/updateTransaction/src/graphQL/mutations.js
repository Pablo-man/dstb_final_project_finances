import {GraphQLString, GraphQLID } from 'graphql';
import Transaction from '../model/Transaction.js';

export const updateTransaction={
    type: GraphQLString,
    description: "Register new transaction",
    args: {
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
    },
    async resolve(_, args) {
        const res = await Transaction.updateOne({_id: args.id}, args)
        
        console.log(res)
        return res;
    },
}