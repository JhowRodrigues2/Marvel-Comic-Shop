import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import GlobalProvider from "./context";
import { Main } from "./components/main";
function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyle />
        <Header />
        <Footer />
        <Main />
      </GlobalProvider>
    </>
  );
}

export default App;
