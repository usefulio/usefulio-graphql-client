import gql from "graphql-tag";

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
