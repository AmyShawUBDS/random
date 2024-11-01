import React, { useEffect, useState } from 'react';
import { fetchCharacterByName } from '../api/mortyApi';
import { useParams } from 'react-router-dom';
import { Character } from '../../types/Character';
import { Typography } from '@mui/material';

const CharacterDetails: React.FC = () => {

    const { name } = useParams<{name: string}>();
    const [character, setCharacter] = useState<Character[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setError('');
            setLoading(true);

            try{
                if(name){
                    const results = await fetchCharacterByName(name);
                    setCharacter(results);
                }
            } catch (err){
                setError('Failed to fetch character data.');
            } finally{
                setLoading(false);
            }

        };
        fetchData();
    },[name]);

    return(
        <div>

            {loading && <Typography variant='h6'>Loading...</Typography>}
            {error && <Typography variant='h6' color="error">{error}</Typography>}

            {character.length > 0 &&(
                <div>
                    {character.map((character) => (
                        <div key={character.id}>
                            <Typography variant="h6">{character.name}</Typography>
                            <img src={character.image} alt={character.name} />
                            <Typography variant="body1">Status: {character.status}</Typography>
                            <Typography variant="body1">Species: {character.species}</Typography>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
};

export default CharacterDetails;