import {GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const CategoryType= new GraphQLObjectType({
    name: 'Category',
    description: 'Category type',
    fields:() => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        category: {type: GraphQLString}
    })
})