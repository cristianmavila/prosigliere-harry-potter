import ListCharacters from "@/components/list-characters";
import { useCharacterStore } from "@/stores/characters";

const Favorites = () => {
  const favorites = useCharacterStore((state) => state.favorites);
  return (
    <div className="container grid gap-4">
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <ListCharacters data={favorites} />
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <h2>Favorites not found!</h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;
