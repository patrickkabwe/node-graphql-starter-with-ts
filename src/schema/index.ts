import { makeExecutableSchema } from "@graphql-tools/schema";
import { demoResolvers, demoTypeDefs } from "apps/demoApp";

export const schema = makeExecutableSchema({
  typeDefs: [demoTypeDefs],
  resolvers: [demoResolvers],
});
