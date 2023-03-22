import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import MenuCheckoutProvider from "./context";
function App() {
  return (
    <>
      <MenuCheckoutProvider>
        <GlobalStyle />
        <Header />
        <Footer />
      </MenuCheckoutProvider>
    </>
  );
}

export default App;
