import {GraphQLString} from 'graphql';
import Transaction from '../model/Transaction.js';

export const register={
    type: GraphQLString,
    description: "Register new transaction",
    args: {
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
    async resolve(_, { value, date, type, status, user_id, destination_id, paymentMethod, evidence, category }) {
        const transaction = new Transaction({ value, date, type, status, user_id, destination_id, paymentMethod, evidence, category });
        await transaction.save();

        return transaction;
    },
}