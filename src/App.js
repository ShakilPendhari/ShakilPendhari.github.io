import './App.css';
import Navbar from './Componets/Navbar';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
       <Box>
          <Navbar/>
       </Box>
       <Box>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
       </Box>
    </div>
  );
}

export default App;
