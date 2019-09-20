import { gql } from "apollo-boost";

export const GET_ALL_AUTHORS = gql`
  query {
    getAuthors {
      username
      email
      name
    }
  }
`;
