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

export const ADD_NEW_POST = gql`
  mutation(
    $authorId: ID!
    $title: String
    $body: String
    $isPublished: Boolean
  ) {
    addPost(
      data: {
        authorId: $authorId
        title: $title
        body: $body
        isPublished: $isPublished
      }
    ) {
      body
    }
  }
`;

export const ADD_NEW_AUTHOR = gql`
  mutation addAuthor(
    $name: String
    $username: String!
    $password: String!
    $email: String!
  ) {
    addAuthor(
      data: {
        name: $name
        username: $username
        password: $password
        email: $email
      }
    ) {
      name
      username
      password
      email
    }
  }
`;
// export const UPDATE_USER = gql`
// mutation (
//   $name: String
//   $username: String
//   $password: String
// )
// `;
