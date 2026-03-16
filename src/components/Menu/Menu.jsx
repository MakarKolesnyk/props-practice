import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import CONSTANTS from "../../contants";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
