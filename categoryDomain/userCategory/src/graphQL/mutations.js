import {GraphQLString} from 'graphql';
import UserCategory from '../model/UserCategory.js';

export const register={
    type: GraphQLString,
    description: "Register new user category",
    args: {
        user_id: {type: GraphQLString},
        category_id: {type: GraphQLString}
    },
    async resolve(_, { user_id, category_id }) {
        const newUserCategory = new UserCategory({ user_id, category_id });
        await newUserCategory.save();

        return newUserCategory;
    },
}