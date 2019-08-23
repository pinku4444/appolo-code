import {mergeTypes,fileLoader} from 'merge-graphql-schemas';
import path from 'path';
import resolvers from './module'

const typesArray = fileLoader(path.join(__dirname, '/**/*.graphql'))

const typeDefs = mergeTypes(typesArray, { all: true });


export default {
    resolvers,
    typeDefs
}