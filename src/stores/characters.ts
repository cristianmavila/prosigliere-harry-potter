import { create } from "zustand";
import { CharacterStore, isValidHouse } from "@/types/character";


export const useCharacterStore = create<CharacterStore>((set, get) => ({
	preferred: "",
	favorites: [],
	checkFavorite: (id:string) => {
		return !!get().favorites.find(character => character.id === id)
	},
	preferredHouse: (house) => {
		if(isValidHouse(house)) {
			set(() => ({ preferred: house }));
		}
	},
	favoriteCharacter: (character) => {
		// homework save it in the localStorage
		set((state) => ({ favorites: [...state.favorites, character] }));
	},
	removeFavoriteCharacter: (id) => {
		const favorites = get().favorites.filter(fav => fav.id !== id);
		set(() => ({ favorites }));
	}
}));