export default `
type Session {
  signedIn: Boolean!
}

type Mutation {
  updateSession(
    signedIn: Boolean!
  ): Session!
}

type Query {
  session: Session!
}
`;
