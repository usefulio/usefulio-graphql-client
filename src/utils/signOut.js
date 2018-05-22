const signOut = () => {
  localStorage.removeItem("token");
  return true;
};

export default signOut;
