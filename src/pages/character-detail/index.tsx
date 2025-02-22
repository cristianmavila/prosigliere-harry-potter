import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacterDetail } from "@/services";
import { useCharacterStore } from "@/stores/characters";
import ProfileImage from "@/components/profile-image";
import { Button } from "@/components/ui/button";

const CharactersDetail = () => {
  const { favoriteCharacter, checkFavorite, removeFavoriteCharacter, preferred, preferredHouse } =
    useCharacterStore();

  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["character-detail", id],
    queryFn: () => (id ? fetchCharacterDetail(id) : Promise.reject("No ID")),
    enabled: !!id,
  });

  const { name, image, actor, gender, hairColour, house, dateOfBirth } = data ?? {};

  return (
    <>
      {!isLoading && (
        <div>
          <div className="mb-6">
            <h1>{name}</h1>
            <h2>{actor}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="grid gap-6">
              <ProfileImage src={image} />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <p>Gender: {gender}</p>
              <p>Hair Colour: {hairColour}</p>
              <p>House: {house}</p>
              <p>Date of Birth: {dateOfBirth}</p>
              <p>House: {house}</p>
              {house && house !== preferred && (
                <Button onClick={() => preferredHouse(house)}>
                  Set {house} as preferred house
                </Button>
              )}{" "}
            </div>
            <div className="grid md:justify-end md:items-start">
              {id && data && !checkFavorite(id) ? (
                <Button onClick={() => !!data && favoriteCharacter(data)}>Favorite</Button>
              ) : (
                <Button onClick={() => id && removeFavoriteCharacter(id)}>Unfavorite</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharactersDetail;
