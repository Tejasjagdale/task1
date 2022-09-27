import "./App.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Main from "./pages/Main";
import theme from "./components/theme";

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider>
        <div className="App">
          <Main />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
