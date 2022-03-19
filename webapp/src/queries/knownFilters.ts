import {gql} from "@apollo/client";

export const GET_FILTERS = gql`
  query GetFilters {
    knownFilter {
      id,
      type,
      field_name
    }
  }
`;
