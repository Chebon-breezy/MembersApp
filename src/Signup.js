import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignup = async (e) => {
    e.preventDefault();
    const app = initializeApp(firebaseConfig);
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      // Move the useNavigate hook to the top of the component
      useNavigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={HandleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
