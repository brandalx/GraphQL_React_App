import { gql } from "@apollo/client";
// prettier-ignore

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id,
      username,
      age
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
