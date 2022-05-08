import { createWelcomeMessage, getWelcomeMessage } from "apps/demoApp/services";

export const resolvers = {
  Query: {
    welcome: async () => {
      return await getWelcomeMessage();
    },
  },
  Mutation: {
    welcome: async (_: any, args: any) => {
      return await createWelcomeMessage(args.input);
    },
  },
};
