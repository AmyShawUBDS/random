import axios from "axios";
import { Character } from '../../types/Character';

const BASE_URL = 'https://rickandmortyapi.com/api';

// Fetches all characters
export const fetchCharacters = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/character`, {
      params: { page },
    });
    return response.data;
  };

// Fetches singular character by name
export const fetchCharacterByName = async (name: string) => {
    const response = await axios.get(`${BASE_URL}/character`, {
        params: { name:name },
    });
    return response.data.results; 
};

export const fetchLocations = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/location`, {
        params: {page: page},
    });
    return response.data;
};

export const fetchEpisodes = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/episode`, {
        params: {page: page},
    });
    return response.data;
};