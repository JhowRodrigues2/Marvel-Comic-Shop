import React, { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext({});
import md5 from "md5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalProvider = ({ children }) => {
  const [comicsDATA, setComicsDATA] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const [itensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [quantity] = useState(0);
  const pages = Math.ceil(comicsDATA && comicsDATA.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = comicsDATA.slice(startIndex, endIndex);
  const publicKey = "6957be1383fc0b2a449ddbe9f6dd5274";
  const privateKey = "669a8c930982271423a321682044d536152f73b2";



  useEffect(() => {
    const loadHeroesComics = async () => {
      setIsLoading(true);

      const timestamp = new Date().getTime();
      const hash = md5(timestamp + privateKey + publicKey);

      const req = await fetch(
        `https://gateway.marvel.com/v1/public/comics?&limit=100&ts=${timestamp}&apikey=6957be1383fc0b2a449ddbe9f6dd5274&hash=${hash}&orderBy=-onsaleDate`
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

  const addCart = (thumbnail, price) => {
    const existingCartItem = cartItems.find(
      (item) => item.thumbnail === thumbnail
    );
    if (existingCartItem === undefined) {
      setCartItems([
        ...cartItems,
        { thumbnail: thumbnail, price: price, quantity: 1 },
      ]);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.thumbnail === thumbnail) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
    }

    toast.success("Item adicionado ao carrinho!",{className:'notification'}
    );
  };

  const removeCart = (thumbnailToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.thumbnail !== thumbnailToRemove
    );
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (thumbnail) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.thumbnail === thumbnail) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (thumbnail) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.thumbnail === thumbnail) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      })
      .filter(Boolean);
    setCartItems(updatedCartItems);
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
        quantity,
        increaseQuantity,
        decreaseQuantity,
        removeCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
