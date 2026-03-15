import { useContext } from "react";
import { ThemeContext } from "../../Contexts";
import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';
import CONSTANTS from "../../contants";


const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEME.LIGHT
        ? CONSTANTS.THEME.DARK
        : CONSTANTS.THEME.LIGHT,
    );
  };
  return (
    <header>
      <button onClick={changeTheme}>
        {theme === CONSTANTS.THEME.LIGHT
          ? <Icon path={mdiWhiteBalanceSunny} size={1}/>
          : <Icon path={mdiWeatherNight} size={1}/>}
      </button>
    </header>
  );
};

export default Header;
