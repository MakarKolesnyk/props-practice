import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeContext, UserContext } from "./Contexts";
import { useState } from "react";
import CONSTANTS from "./contants";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProfilesPage from "./pages/ProfilesPage";
import ProfileInfo from "./components/Profile/ProfileInfo";
import ProfileSettings from "./components/Profile/ProfileSettings";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";

function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="profile" element={<ProfilesPage />}>
              <Route path="info" element={<ProfileInfo />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
