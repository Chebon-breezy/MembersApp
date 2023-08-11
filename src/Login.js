import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // The user is logged in.
        const user = userCredential.user;
      })
      .catch((error) => {
        // Handle login error.
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
}
