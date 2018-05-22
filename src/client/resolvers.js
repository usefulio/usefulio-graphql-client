import sessionQuery from "../graphql/session";

export default {
  Mutation: {
    updateSession: (_, { signedIn }, { cache }) => {
      const prevState = cache.readQuery({ query: sessionQuery });
      const data = {
        ...prevState,
        session: {
          ...prevState.session,
          signedIn
        }
      };
      cache.writeData({ query: sessionQuery, data });
      return data;
    }
  }
};
