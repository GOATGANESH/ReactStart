import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

  const [userData,setUserData] = useContext(AuthContext);

  const logoutHandler = () => {
    setUser(null);
    currentUserData(null);
  };

  useEffect(() => {
    if (userData) {
      const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
      if (loggedInUser) setUser(loggedInUser.role);
    }
  }, [userData]);

  const handleLogin = (email, pass) => {
    if (email == "admin@gmail.com" && pass == 123) {
      localStorage.setItem("currentUser", JSON.stringify({ role: "admin" }));
      localStorage.setItem(
        "currentUserData",
        JSON.stringify(userData.admin[0])
      );
      setUser("admin");
    } else if (
      userData &&
      userData.employees.find((e) => e.email == email && e.password == pass)
    ) {
      const emp = userData.employees.find((e) => {
        return e.email == email && e.password == pass;
      });
      if (emp) {
        setCurrentUserData(emp);
      }
      localStorage.setItem("currentUser", JSON.stringify({ role: "employee" }));
      localStorage.setItem("currentUserData", JSON.stringify(emp));
      setUser("employee");
    } else {
      alert("Invalid Credentials !");
      setUser(null);
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard data={currentUserData}  setUser={setUser} /> : ""}
      {user == "employee" ? <EmployeeDashboard data={currentUserData}  setUser={setUser} /> : ""}
    </>
  );
};

export default App;
