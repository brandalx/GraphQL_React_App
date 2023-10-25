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
