import { Character } from "@/types/character";
import { NavLink } from "react-router-dom";
import ProfileImage from "@/components/profile-image";

const ListCharacters = ({ data }: { data: Character[] | undefined }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 m-3">
      {data?.map(({ id, name, image }) => {
        return (
          <NavLink to={`/character/${id}`} key={id}>
            <ProfileImage src={image} />
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default ListCharacters;
