import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

const CharacterExplorer: React.FC = () => {
    return (
        <div>
            
            <CharacterList />
            
        </div>
    );
};

export default CharacterExplorer;