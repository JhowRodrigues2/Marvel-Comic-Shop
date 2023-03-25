import React, { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext({});
import md5 from "md5";

const GlobalProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;

  const [comicsDATA, setComicsDATA] = useState([]);

  useEffect(() => {
    async function loadHeroesComics() {
      setIsLoading(true);

      const timestamp = new Date().getTime();
      const hash = md5(timestamp + privateKey + publicKey);

      const req = await fetch(
        `https://gateway.marvel.com/v1/public/comics?limit=30&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=-onsaleDate `
      );
      const res = await req.json();
      setIsLoading(false);

      setComicsDATA(res.data.results);
    }
    loadHeroesComics();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <GlobalContext.Provider
      value={{ isMenuOpen, toggleMenu, comicsDATA, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
