import React from 'react';
import CharacterList from '../components/CharacterList';
import { Typography } from '@mui/material';

const CharacterExplorer: React.FC = () => {
    return (
        <div>

            <Typography variant="h2" gutterBottom style={{textAlign: 'center', marginTop: '1em'}}>
                All Characters
            </Typography>
            
            <CharacterList />
            
        </div>
    );
};

export default CharacterExplorer;