import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import cx from "classnames";
import CONSTANTS from "../../contants";
import { withTheme, withUserAuth } from "./../HOCs/index";
import { PropTypes } from "prop-types";
import styles from "./Header.module.scss";
import Menu from "./../Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = (props) => {
  const { theme, setTheme, user, setUser } = props;
  const [isSavedUser, setIsSaveduser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsSaveduser(true);
    }
    return () => {};
  }, []);
  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEME.LIGHT
        ? CONSTANTS.THEME.DARK
        : CONSTANTS.THEME.LIGHT,
    );
  };
  const headerClasses = cx(styles.header, {
    [styles["light"]]: theme === CONSTANTS.THEME.LIGHT,
    [styles["dark"]]: theme === CONSTANTS.THEME.DARK,
  });
  const logOutUser = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <header className={headerClasses}>
      <Menu />
      {user ? (
        <p>
          Hi! {user.firstName}! <button onClick={logOutUser}>log out</button>
        </p>
      ) : isSavedUser ? (
        <Link to="login">Login</Link>
      ) : (
        <Link to="register">Register</Link>
      )}
      <span onClick={changeTheme} className={styles.themeBtn}>
        {theme === CONSTANTS.THEME.LIGHT ? (
          <Icon path={mdiWeatherNight} size={1} />
        ) : (
          <Icon path={mdiWhiteBalanceSunny} size={1} />
        )}
      </span>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.function,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default withUserAuth(withTheme(Header));
