import { useContext } from "react";
import { userAccountContext } from "../../Contexts";

const ProfileInfo = () => {
  const user = useContext(userAccountContext);
  return (
    <section>
      <h1>Info</h1>
      <p>first name: {user.firstName}</p>
      <p>last name: {user.lastName}</p>
    </section>
  );
};

export default ProfileInfo;
