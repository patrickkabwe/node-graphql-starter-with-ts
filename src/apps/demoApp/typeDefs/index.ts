import { gql } from "apollo-server-core";

export const typeDefs = gql`
  enum Gender {
    MALE
    FEMALE
  }

  type Name {
    id: ID
    name: String
    gender: String
  }

  type Query {
    names(gender: Gender): [Name!]!
    name(gender: Gender): Name
  }
`;
