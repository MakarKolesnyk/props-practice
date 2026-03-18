import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  }, [navigate, user]);

  if(!user){
    return <p>You must login or register</p>
  }

  return (
    <section>
      <h1>Info</h1>
      <p>first name: {user?.firstName}</p>
      <p>last name: {user?.lastName}</p>
      <p>email: {user?.email}</p>
    </section>
  );
};

export default ProfileInfo;
