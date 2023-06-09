import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import GlobalProvider from "./Context/index";
import { Main } from "./components/main";
import { AppContainer } from "./styles/GlobalStyle";
function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    </GlobalProvider>
  );
}

export default App;
