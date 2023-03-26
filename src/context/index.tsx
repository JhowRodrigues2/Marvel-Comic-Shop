import React, { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext({});
import md5 from "md5";

const GlobalProvider = ({ children }) => {
  const [comicsDATA, setComicsDATA] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const [itensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const pages = Math.ceil(comicsDATA && comicsDATA.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = comicsDATA.slice(startIndex, endIndex);
  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;

  useEffect(() => {
    const loadHeroesComics = async () => {
      setIsLoading(true);

      const timestamp = new Date().getTime();
      const hash = md5(timestamp + privateKey + publicKey);

      const req = await fetch(
        `https://gateway.marvel.com/v1/public/comics?&limit=100&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=-onsaleDate`
      );
      const res = await req.json();
      const filteredData = res.data.results.filter(
        (item) =>
          item.prices[0].price > 0 &&
          item.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );

      setIsLoading(false);
      setComicsDATA(filteredData);
      setError("");
    };

    loadHeroesComics();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
    setError("");
  };

  const addCart = (items) => {
    setCartItems([...cartItems, items]);
    console.log(cartItems);
  };

  const handleSearch = async () => {
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey);
    try {
      const req = await fetch(
        `https://gateway.marvel.com/v1/public/comics?limit=100&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&orderBy=-onsaleDate&titleStartsWith=${inputText}`
      );
      const res = await req.json();
      const filteredData = res.data.results.filter(
        (item) =>
          item.prices[0].price > 0 &&
          item.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );

      res.data.total == 0
        ? setError("Dados Inválidos!")
        : setComicsDATA(filteredData);
    } catch (error) {
      error && setError("Dados Inválidos!");
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        comicsDATA,
        isLoading,
        pages,
        setCurrentPage,
        currentItens,
        handleSearch,
        handleChange,
        inputText,
        error,
        addCart,
        cartItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
