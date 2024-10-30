import React, { useState } from 'react';
import { fetchCharacterByName } from '../api/mortyApi';
import { Character } from '../../types/Character';
import { Button, Container, Typography , TextField} from '@mui/material';

const CharacterCard: React.FC = () => {
    const [characterName, setCharacterName] = useState('');
    const [error, setError] = useState('');
    const [character, setCharacter] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setError('');
        setLoading(true);
        try{
            const data = await fetchCharacterByName(characterName);
            setCharacter(data);
        } catch(err){
            setError('Failed to find character');
        } finally{
            setLoading(false);
        }
    };

    return(
        <div>

            <Typography variant="h6" gutterBottom style={{textAlign: 'center', marginTop: '1em'}}>
                Search for a character by name
            </Typography>
            <Container>
                <TextField 
                    id="outlined-basic" 
                    label="Enter a name" variant="outlined" 
                    sx={{ width: '20em', paddingRight: '2em'}}
                    onChange={(e)=>setCharacterName(e.target.value)}
                />
                <Button 
                    variant="outlined" 
                    sx={{marginTop:'0.5em'}}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Container>

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
}

export default CharacterCard;