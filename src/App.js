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
       <Box position="sticky" top="0">
          <Navbar/>
       </Box>
       <Box   border="2px solid green">
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
       </Box>
    </div>
  );
}

export default App;
