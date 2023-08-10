import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firebase from "firebase/app";
import Login from "./Login";
import Signup from "./Signup"; // Add this import
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/signup" element={<Signup />} /> {/* New route */}
            <Route path="/" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
