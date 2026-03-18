import { useContext } from "react";
import { ThemeContext, userAccountContext, UserContext } from "../../Contexts";

export const withTheme = (InnerComponent) => {
  return function InnerComponentWithTheme(props) {
    const { theme, setTheme } = useContext(ThemeContext);
    return <InnerComponent theme={theme} setTheme={setTheme} {...props} />;
  };
};

export const withUserAccount = (InnerComponent) => {
  return function InnerComponentWithUserAccount(props) {
    const user = useContext(userAccountContext);
    return <InnerComponent user={user} {...props} />;
  };
};

export const withUserAuth = (InnerComponent) => {
  return function InnerComponentWithUserAuth(props) {
    const { user, setUser } = useContext(UserContext);
    return <InnerComponent user={user} setUser={setUser} {...props} />;
  };
};
