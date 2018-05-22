import gql from "graphql-tag";

export default gql`
  query {
    session @client {
      signedIn
    }
  }
`;
