
export type Character = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};

export const enum HogwartsHouse {
  Gryffindor = "Gryffindor",
  Slytherin = "Slytherin",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
}

export type CharacterStore = {
  preferred: HogwartsHouse | "";
  favorites: Character[];
  checkFavorite: (id:string) => boolean;
  preferredHouse: (house: HogwartsHouse) => void;
  favoriteCharacter: (character: Character) => void;
  removeFavoriteCharacter: (id:string) => void;
}

const HOGWARTS_HOUSES = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'] as const;

export const isValidHouse = (house: HogwartsHouse): house is HogwartsHouse => {
  return HOGWARTS_HOUSES.includes(house as HogwartsHouse);
}

