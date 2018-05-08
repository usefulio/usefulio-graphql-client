import { gql } from "apollo-boost";

export default gql`
  mutation updateSignedIn($signedIn: Boolean!) {
    updateSignedIn(signedIn: $signedIn) @client
  }
`;
