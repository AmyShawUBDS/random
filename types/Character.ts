export interface Character {
    id: number; // Character's unique id
    name: string;
    status: 'Alive'|'Dead'|'unknown';
    species: string;
    type: string;
    gender: 'Male'|'Female'|'Genderless'|'Unknown',
    origin: {
        name: string;
        link: string; // Url
    };
    location: {
        name: string;
        link: string; // Url
    };
    image: string; // Url
    episode: string[]; // Array of episode urls appeared in
    created: string; // Timestamp of creation date in API

}