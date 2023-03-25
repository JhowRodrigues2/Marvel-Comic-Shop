import React, { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext({});
import md5 from "md5";

const GlobalProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;

  const [comicsDATA, setComicsDATA] = useState([]);

  useEffect(() => {
    async function loadHeroesCharacters() {
      const timestamp = new Date().getTime();
      const hash = md5(timestamp + privateKey + publicKey);

      const req = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${publicKey}&hash=${hash}`
      );
      const res = await req.json();
      setComicsDATA(res);
    }
    loadHeroesCharacters();
  }, []);
  console.log(comicsDATA);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <GlobalContext.Provider value={{ isMenuOpen, toggleMenu, comicsDATA }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
