import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // The user is signed up.
        const user = userCredential.user;
      })
      .catch((error) => {
        // Handle sign up error.
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSignUp}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
