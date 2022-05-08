import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Welcome {
    id: ID
    message: String
  }
  input WelcomeInput {
    message: String!
  }

  type Query {
    welcome: Welcome
  }

  type Mutation {
    welcome(input: WelcomeInput): Welcome
  }
`;
