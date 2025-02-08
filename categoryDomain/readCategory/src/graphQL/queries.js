import {GraphQLList, GraphQLID} from 'graphql'
import { CategoryType } from './types.js'
import Category from '../model/Category.js'

export const categories= {
    type: new GraphQLList(CategoryType),
    description: "Retrieves a list of Categories",
    resolve: () => Category.find()
}

export const category= {
    type: CategoryType,
    description: 'Return only one Category',
    args:{
        id: {type: GraphQLID}
    },
    resolve: (_, {id}) => Category.findById(id)
}