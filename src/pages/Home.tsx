import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{textAlign: 'center', marginTop: '1em'}}>
        Random Random
      </Typography>

      <Typography variant="h5" gutterBottom style={{textAlign: 'center'}}>
        Choose one of the options below:
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
        }}
      >
        <Link to="/CharacterExplorer" style={{ textDecoration: 'none' }}>
          <Button 
            variant="outlined"
          >
            Go to all characters
        </Button>
        </Link>

        <CharacterCard />

      </Container>
      
    </Container>
  );
}

export default App;
