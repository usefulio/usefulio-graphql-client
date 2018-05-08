export default {
  Mutation: {
    updateSignedIn: (_, { signedIn }, { cache }) => {
      cache.writeData({ data: { signedIn } });
    }
  }
};
