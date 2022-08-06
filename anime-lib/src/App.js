import Grid from '@mui/material/Grid'
import { Routes, Route } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';

import './App.css';

function App() {
  return (
      <Grid container direction="column">
        <Routes>
        <Route path='/' element={<AboutUs />} />
      
    </Routes>
      </Grid>
  );
}

export default App;
