import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import { onAuthStateChanged, getIdTokenResult } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdTokenResult(user).then((idTokenResult) => {
          // Confirm the user is an Admin.
          if (!!idTokenResult.claims.admin) {
            setUser({ ...user, role: "admin" }); // set user role to "admin"
          } else {
            setUser({ ...user, role: "user" }); // set user role to "user"
          }
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const renderDashboard = () => {
    if (user && user.role === "admin") {
      return <AdminDashboard />;
    } else if (user && user.role === "user") {
      return <UserDashboard />;
    } else {
      return <Login />;
    }
  };

  return <div>{renderDashboard()}</div>;
};

export default App;
