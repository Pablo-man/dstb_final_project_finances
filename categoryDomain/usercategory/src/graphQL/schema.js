import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql'
import {register} from './mutations.js'

const QueryType= new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields:{
        _empty: { 
            type: GraphQLString, 
            resolve: () => "GraphQL API is running" 
        }
    }
})

const MutationType= new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields:{
        register
    }
})

const schema= new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

export default schema;