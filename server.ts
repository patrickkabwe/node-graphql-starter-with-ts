import { ApolloServer } from "apollo-server-fastify";
import { db } from "libs/prisma";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import fastify, { FastifyInstance } from "fastify";
import { schema } from "schema";

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer() {
  const app = fastify();
  const server = new ApolloServer({
    schema: schema,
    csrfPrevention: true,
    context: (req: any) => {
      return {
        req: req.request.raw,
      };
    },
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();
  app.register(server.createHandler());
  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const startApp = async () => {
  try {
    await startApolloServer();
  } catch (error) {
    console.log(error);
    db.$disconnect();
    process.exit(1);
  }
};

startApp();
