import React, { createContext, useState } from "react";
export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;

  console.log(publicKey, privateKey);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <GlobalContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
