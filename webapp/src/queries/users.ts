import {gql} from "@apollo/client";

export const GET_USERS = gql`
query getUsers(
  $age_min: Float,
  $age_max: Float,
  $happy: Boolean,
  $healthy: Boolean,
  $busy: Boolean,
  $name: String,
) {
  users(
    age_min: $age_min,
    age_max: $age_max,
    happy: $happy,
    healthy: $healthy,
    busy: $busy,
    name: $name
  ) {
      busy 
      name
      id
      happy
      healthy
      age
    }	
  }
`;
