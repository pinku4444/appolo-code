import {AuthenticationError,ApolloError,UserInputError,ForbiddenError} from 'apollo-server-express'
const errorHandler = ( data ) => {
    console.log('data: ', data);
    switch(data.code) {
        case 401:
            throw new AuthenticationError(data.errors)
        
        case 403:
            throw new ForbiddenError(data.errors)
        default : 
            throw new ApolloError(data.errors)
    }
}

export default errorHandler;