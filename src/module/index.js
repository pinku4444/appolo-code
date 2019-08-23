import  { Query as userQuery } from './user/'

const resolvers = {
    Query : {
        ...userQuery 
    }
   
}

export default resolvers;