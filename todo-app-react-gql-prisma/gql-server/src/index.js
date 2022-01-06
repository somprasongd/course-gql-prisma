import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

const opts = {
  port: 4000,
  // cors: {
  //   credentials: true,
  //   origin: ['http://localhost:3000'], // your frontend url.
  // },
};

server.start(opts, () => console.log('Server is running on localhost:4000'));
