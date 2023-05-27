import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Providervider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Providervider>
  );
};

export default AuthContext;
