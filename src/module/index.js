import  { Query as userQuery,
         Mutation as UserMutation,
         Subscription as userSubscription } from './user/'

const resolvers = {
    Query : {
        ...userQuery 
    },
    Mutation : {
        ...UserMutation
    },
    Subscription : {
        ...userSubscription
    }
   
}

export default resolvers;