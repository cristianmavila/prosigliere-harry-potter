import { useQuery } from "@tanstack/react-query";

import { fetchCharacters } from "@/services";
import ListCharacters from "@/components/list-characters";

const Characters = () => {
  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => fetchCharacters(),
  });

  return (
    <div className="container grid gap-4">
      <h1>Characters</h1>
      <ListCharacters data={data} />
    </div>
  );
};

export default Characters;
