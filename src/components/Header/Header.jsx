import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import cx from "classnames";
import CONSTANTS from "../../contants";
import { withTheme, withUserAccount } from "./../HOCs/index";
import { PropTypes } from "prop-types";
import styles from "./Header.module.scss";
import Menu from './../Menu/Menu';

const Header = (props) => {
  const {
    theme,
    setTheme,
    user: { firstName, lastName },
  } = props;
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
  return (
    <header className={headerClasses}>
      <Menu/>
      <p>
        Hi! {firstName} {lastName}
      </p>
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

  export default withUserAccount(withTheme(Header));
