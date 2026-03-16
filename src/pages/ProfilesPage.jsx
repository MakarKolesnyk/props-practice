import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <NavLink to='info'>info</NavLink>
          </li>
          <li>
            <NavLink to='settings'>settings</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default ProfilesPage;
