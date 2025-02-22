import { Character } from "@/types/character"

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCharacters = async (): Promise<Array<Character>> => {
	const res = await fetch(`${API_URL}/characters`);
	if(!res.ok) {
		throw new Error("There is an error fetching all characters");
	}
	const data = await res.json();
	return data
}

export const fetchCharacterDetail = async (id:string): Promise<Character> => {
	const res = await fetch(`${API_URL}/character/${id}`);
	if(!res.ok) {
		throw new Error("There is an error fetching character by ID");
	}
	const data = await res.json();
	return data[0]
}

export const fetchStudents = async (): Promise<Array<Character>> => {
	const res = await fetch(`${API_URL}/characters/students`);
	if(!res.ok) {
		throw new Error("There is an error fetching all students");
	}
	const data = await res.json();
	return data
}

export const fetchStaff = async (): Promise<Array<Character>> => {
	const res = await fetch(`${API_URL}/characters/staff`);
	if(!res.ok) {
		throw new Error("There is an error fetching all staff");
	}
	const data = await res.json();
	return data
}

