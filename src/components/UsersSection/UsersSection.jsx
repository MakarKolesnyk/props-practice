import UserProfile from "../UserProfile/UserProfile";
import users from "./data";
import styles from "./UserSection.module.scss";

const UsersSection = () => {
  const createUser = (user) => <UserProfile user={user} key={user.id} />;
  return (
    <>
      <h2 className={styles.title}>Users</h2>
      <section className={styles.section}>{users.map(createUser)}</section>
    </>
  );
};

export default UsersSection;
