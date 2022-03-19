import {gql} from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      busy
      name
      id
      happy
      healthy
      age
    }	
  }
`;
