import sha256 from "../utils/sha256";

const signIn = async ({ email, password }) => {
  const response = await fetch("http://localhost:3000/loginWithPassword", {
    method: "POST",
    body: JSON.stringify({
      email,
      password: sha256(password)
    })
  });
  if (response.status === 401) {
    throw new Error("Invalid e-mail or password");
  } else if (response.status === 200) {
    const { token } = await response.json();
    if (token) {
      localStorage.setItem("token", token);
      return true;
    }
  }
  return false;
};

export default signIn;
