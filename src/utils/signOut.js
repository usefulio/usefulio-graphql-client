const signOut = () => {
  localStorage.removeItem("token");
  window.location.reload();
  return true;
};

export default signOut;
