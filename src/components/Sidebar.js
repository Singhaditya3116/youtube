import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Home from "../images/Home.svg";

const MenuItems = ({ name, icon }) => {
  return (
    <li className="p-3 mb-3 hover:bg-gray-200 rounded-lg cursor-pointer">
      <div className="flex">
        <img className="w-6 mr-3 object-cover" alt="Subscription icon" src={icon} />
        <button>{name}</button>
      </div>
    </li>
  );
};

const Sidebar = () => {
  const isMenuCollapse = useSelector((store) => store.nav.isMenuCollapse);

  //Early Return pattern
  if (isMenuCollapse) {
    return null;
  }

  return (
    <aside className="relative shadow-lg py-2 px-2 shrink-0 basis-48">
      <ul className="sticky top-0 left-0 py-2">
        <Link to="/">
          <MenuItems name={"Home"} icon={Home} />
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
