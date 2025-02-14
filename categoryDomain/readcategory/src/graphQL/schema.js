import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql'
import {categories, category} from './queries.js'

const QueryType= new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields:{
        categories,
        category
    }
})

const MutationType= new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields:{
        _empty: { 
            type: GraphQLString, 
            resolve: () => "GraphQL API is running" 
        }
    }
})

const schema= new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

export default schema;