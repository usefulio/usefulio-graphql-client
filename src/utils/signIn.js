import sha256 from "../utils/sha256";
import { loginUrl } from "../config";

const signIn = async ({ email, password }) => {
  const response = await fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password: sha256(password)
    }),
    mode: "cors"
  });
  if (response.status !== 200) {
    throw new Error("Sign in error");
  }
  const body = await response.json();
  if (body.error) {
    throw new Error(body.error);
  }
  if (body.data.token) {
    localStorage.setItem("token", body.data.token);
    return true;
  }
  return false;
};

export default signIn;
