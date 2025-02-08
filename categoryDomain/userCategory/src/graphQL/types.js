import {GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const UserCategoryType= new GraphQLObjectType({
    name: 'User Category',
    description: 'User Category type',
    fields:() => ({
        id: {type: GraphQLID},
        user_id: {type: GraphQLString},
        category_id: {type: GraphQLString}
    })
})