import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import CONSTANTS from "../../contants";
import { UserContext } from "../../Contexts";

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
          <li>
            <NavLink to="books">Books</NavLink>
          </li>
      </ul>
    </nav>
  );
};

export default Menu;
