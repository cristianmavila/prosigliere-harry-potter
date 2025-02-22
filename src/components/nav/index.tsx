import { NavLink } from "react-router-dom";
import HarryPotterLogo from "@/assets/Harry Potter Wordmark.svg";
import { useCharacterStore } from "@/stores/characters";

const Nav = () => {
  const { preferred, favorites } = useCharacterStore();
  return (
    <div className="p-4 gap-4 items-center sticky top-0 left-0 z-20 shadow-md bg-orange-900 flex justify-between md:flex-row flex-col">
      <div className="flex gap-4 justify-center items-center">
        <img src={HarryPotterLogo} className="w-[150px] invert" />
        {preferred && <span className="rounded-full bg-orange-950 p-2 px-4">{preferred}</span>}
      </div>
      <ul className="flex justify-end gap-8 items-center px-4 font-bold">
        <li>
          <NavLink to={"/"}>Characters</NavLink>
        </li>
        <li>
          <NavLink to={"/students"}>Students</NavLink>
        </li>
        <li>
          <NavLink to={"/staff"}>Staff</NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"}>Favorites ({favorites.length})</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
