import { gql } from "apollo-boost";

export default gql`
  query {
    users {
      id
      email
      firstName
      lastName
    }
  }
`;
