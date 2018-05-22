export default {
  session: {
    __typename: "Session",
    signedIn: !!localStorage.getItem("token")
  }
};
