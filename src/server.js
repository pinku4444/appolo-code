import express from 'express';
import http from 'http';
import { ApolloServer,makeExecutableSchema} from  'apollo-server-express';
import pubSub from './subscription'
import {importSchema} from 'graphql-import'
import configuration from './config/configuration';
import schema from './index';import {UserAPI} from './services/index';
import errorHandler from './utils/errorhandler';


const PORT = configuration.port || 9002;
 
 
const server = new ApolloServer({ 
    schema:makeExecutableSchema(schema),
    dataSources: () => {
        return {
            userAPI: new UserAPI(),
        };
    },
    context: ( {req,connection} ) => {
        if (connection) {
            return {
                pubSub
            };
        }else {
            return {
                token: req.headers.authorization || '',
                errorHandler,
                pubSub
            }
        }
        
    } 
});
 
const app = express();
server.applyMiddleware({ app });
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

 httpServer.listen({ port: PORT }, () => {
  console.log(` Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
 });