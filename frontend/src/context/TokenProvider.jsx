import { useState } from "react";
import { TokenContext } from "./TokenContext";

export const TokenProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    token: false,
  });

  return (
    <TokenContext.Provider value={{ user, setUser }}>
      {children}
    </TokenContext.Provider>
  );
};
