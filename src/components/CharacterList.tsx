import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/mortyApi';
import { Character } from '../../types/Character';

const CharacterList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<string|null>(null);

    const fetchData = async (page: number) => {
        try{
            const data = await fetchCharacters(page);
            setCharacters(data);
            setLoading(false);
        } catch (err){
            setError('Failed to fetch characters');
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData(1);
    },[]);

    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error...</div>
    }

    return(
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default CharacterList;