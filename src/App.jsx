import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeContext } from "./Contexts";
import { useState } from "react";
import CONSTANTS from "./contants";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProfilesPage from "./pages/ProfilesPage";
import ProfileInfo from "./components/Profile/ProfileInfo";
import ProfileSettings from "./components/Profile/ProfileSettings";

function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="profile" element={<ProfilesPage />}>
            <Route path="info" element={<ProfileInfo />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
