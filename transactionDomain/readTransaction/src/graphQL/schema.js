import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import {transaction, transactions} from './queries.js'
import {register} from './mutations.js'

const QueryType= new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields:{
        transaction,
        transactions
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