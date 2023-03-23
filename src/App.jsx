import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import MenuCheckoutProvider from "./context";
import { Main } from "./components/main";
function App() {
  return (
    <>
      <MenuCheckoutProvider>
        <GlobalStyle />
        <Header />
        <Footer />
        <Main />
      </MenuCheckoutProvider>
    </>
  );
}

export default App;
