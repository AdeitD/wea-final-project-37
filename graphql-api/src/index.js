const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { getDataLoaders } = require('./loaders');

const app = express()

app.use(cors());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        loaders: getDataLoaders(),
    })
});

server.listen({ port: process.env.PORT || 3030 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});