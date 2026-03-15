import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { ThemeContext } from "./Contexts";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <HomePage />
    </ThemeContext.Provider>
  );
}

export default App;
