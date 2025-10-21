import React, { createContext, useEffect, useRef, useState } from "react";
import {
  getLocalStorage,
  getNewLocalStorage,
  setLocalStorage,
  setNewLocalStorage,
} from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userDataChanged, setUserDataChanged] = useState(null);
  const flag = useRef(0);



  useEffect(() => {
    if (flag.current == 1 && userDataChanged) {
      // updateLocalStorage(userDataChanged)
      setLocalStorage(userDataChanged);
      const { employees, admin } = getLocalStorage();
      setUserData({ employees, admin });
    } else {
      flag.current = 1;
    }
  }, [userDataChanged]);

  useEffect(() => {

  const existingEmployees = localStorage.getItem("employee");
  const existingAdmin = localStorage.getItem("admin");

  // Initialize only once if no data exists
  if (!existingEmployees || !existingAdmin) {
    setLocalStorage(null);
  }

  const { employees, admin } = getLocalStorage();
  setUserData({ employees, admin });

  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={[userData, setUserData, userDataChanged, setUserDataChanged]}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
