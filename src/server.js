import express from 'express';
import { ApolloServer,makeExecutableSchema} from  'apollo-server-express';
import {importSchema} from 'graphql-import'
import configuration from './config/configuration';
import schema from './index';import {UserAPI} from './services/index'

const PORT = configuration.port || 9002;
 
 
const server = new ApolloServer({ 
    schema:makeExecutableSchema(schema),
    dataSources: () => {
        return {
            userAPI: new UserAPI(),
        };
    },
    context: ( {req} ) => {
        return {
            token: req.headers.authorization || ''
        }
    } 
});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: PORT }, () =>
  console.log(` Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);