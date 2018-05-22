import gql from "graphql-tag";

export default gql`
  mutation updateSession($signedIn: Boolean!) {
    updateSession(signedIn: $signedIn) @client {
      __typename
      signedIn
    }
  }
`;
