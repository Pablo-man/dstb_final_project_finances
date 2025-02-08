import {GraphQLString} from 'graphql';
import Transaction from '../model/Transaction.js';

export const register={
    type: GraphQLString,
    description: "Register new transaction",
    args: {
        value: {type: GraphQLString},
        date: {type: GraphQLString},
        type: {type: GraphQLString},
        user_id: {type: GraphQLString},
        destination_id: {type: GraphQLString},
        paymentMethod: {type: GraphQLString},
        evidence: {type: GraphQLString},
        category_user_id: {type: GraphQLString}
    },
    async resolve(_, { value, date, type, user_id, destination_id, paymentMethod, evidence, category_user_id }) {
        const transaction = new Transaction({ value, date, type, user_id, destination_id, paymentMethod, evidence, category_user_id });
        await transaction.save();

        return transaction;
    },
}