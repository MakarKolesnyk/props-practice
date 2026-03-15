import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { ThemeContext } from "./Contexts";
import { useState } from "react";
import CONSTANTS from "./contants";

function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <HomePage />
    </ThemeContext.Provider>
  );
}

export default App;
