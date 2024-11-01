import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/mortyApi';
import { Character } from '../../types/Character';
import { Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';


const CharacterList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<string|null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchData = async (page: number) => {
        try{
            const data = await fetchCharacters(page);
            setCharacters(data.results);
            setTotalPages(data.info.pages);
            setLoading(false);
        } catch (err){
            setError('Failed to fetch characters');
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData(page);
        window.scrollTo(0, 0);
    },[page]);


    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error...</div>
    }

    const clickNextPage = () => {
        if(page < totalPages){
            setPage(page +1);
        }
    };

    const clickPrevPage = () => {
        if(page>1){
            setPage(page-1);
        }
    };

    return(
        <div>

            <Grid2 container spacing={3} sx={{padding:'3em'}}>
                {characters.map(character => (
                    <Grid2 
                        size={{xs: 12, sm: 6, md: 4, lg: 3}}
                        key={character.id}
                    >
                        <Card>
                            <CardMedia
                                component="img"
                                image={character.image}
                                alt={character.name}
                                sx={{
                                    xs: 150,
                                    sm: 200,
                                    md: 250,
                                    lg: 300
                                }}
                            />
                            <CardContent>
                                <Typography variant='h6' component="h2">
                                    {character.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Status: {character.status}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Species: {character.species}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}

            </Grid2>
            <Grid2
                container 
                justifyContent="space-between" 
                sx={{
                    marginBottom: '2em',
                    marginTop: '-1em'
                }}
            >
                <Button 
                    variant="contained" 
                    onClick={clickPrevPage} 
                    disabled={page===1}
                    sx={{marginLeft: '2em'}}
                >
                    Previous
                </Button>
                <Button 
                    variant="contained" 
                    onClick={clickNextPage} 
                    disabled={page===totalPages}
                    sx={{marginRight: '2em'}}
                >
                    Next
                </Button>
            </Grid2>

        </div>
    )


}

export default CharacterList;