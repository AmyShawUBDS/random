import React, { useState } from 'react';
import { Button, Container, Typography , TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CharacterCard: React.FC = () => {
    const [characterName, setCharacterName] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        navigate(`/CharacterDetails/${characterName}`);
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
        </div>
    )
}

export default CharacterCard;