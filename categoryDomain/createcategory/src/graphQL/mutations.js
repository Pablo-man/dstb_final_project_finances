import {GraphQLString} from 'graphql';
import {createUserCategory} from '../api/userCategory.js'
import Category from '../model/Category.js';

export const register={
    type: GraphQLString,
    description: "Register new category",
    args: {
        name: {type: GraphQLString},
        description: {type: GraphQLString}
    },
    async resolve(_, { name, description }) {
        const newCategory = new Category({ name, description });
        await newCategory.save();
        createUserCategory( "1", newCategory._id.toString())

        return newCategory;
    },
}