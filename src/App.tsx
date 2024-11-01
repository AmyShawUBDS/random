// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CharacterExplorer from './pages/CharacterExplorer'; 
import CharacterDetails from './pages/CharacterDetails';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CharacterExplorer" element={<CharacterExplorer />} />
                <Route path="/CharacterDetails/:name" element={<CharacterDetails />}/>
            </Routes>
        </Router>
    );
};

export default App;
