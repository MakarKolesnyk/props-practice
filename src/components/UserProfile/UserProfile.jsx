import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./UserProfile.module.scss";
import { mdiThumbUp, mdiThumbDown } from "@mdi/js";
import cx from "classnames";
import Icon from "@mdi/react";
import CONSTANTS from "../../contants";
import { withTheme } from "./../HOCs/index";

const UserProfile = (props) => {
  const {
    user: { name = "Anonim", age = "0", email = "anonim@gmail.com" },
    theme,
  } = props;
  const [isSeclect, setIsSeclect] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  console.log(theme);

  const changeIsSelect = () => {
    setIsSeclect(!isSeclect);
  };
  const addLike = (event) => {
    setAmount(amount + 1);
    event.stopPropagation();
  };
  const subLike = (event) => {
    event.stopPropagation();
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };
  const changeIsDelete = () => {
    setIsDelete(true);
  };

  const articleClasses = cx(styles["user-profile"], {
    [styles["select"]]: isSeclect,
    [styles["noselect"]]: !isSeclect,
    [styles["light"]]: theme === CONSTANTS.THEME.LIGHT,
    [styles["dark"]]: theme === CONSTANTS.THEME.DARK,
  });

  if (isDelete) return null;
  return (
    <article onClick={changeIsSelect} className={articleClasses}>
      <button onClick={changeIsDelete}>X</button>
      <h2>
        name: <span>{name}</span>
      </h2>
      <h3>age: {age}</h3>
      <p>email: {email}</p>
      <p className={styles.flex}>
        <span onClick={addLike}>
          <Icon path={mdiThumbUp} size={1} />
        </span>
        <span className={styles.amount}>{amount}</span>
        <span onClick={subLike}>
          <Icon path={mdiThumbDown} size={1} />
        </span>
      </p>
    </article>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
  theme: PropTypes.string,
};

export default withTheme(UserProfile);
