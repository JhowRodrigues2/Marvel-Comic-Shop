import React, { createContext, useState } from "react";

export const MenuCheckoutContext = createContext({});

const MenuCheckoutProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <MenuCheckoutContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuCheckoutContext.Provider>
  );
};
export default MenuCheckoutProvider;
