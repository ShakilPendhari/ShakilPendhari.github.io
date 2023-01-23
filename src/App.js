import './App.css';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home/Home';
import Skill from './Pages/Skill/Skill';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import { Box } from '@chakra-ui/react';
import About from './Pages/About/About';
import Calender from './Pages/Calender/Calender';
import Stats from './Pages/Stats/Stats';

function App() {
  return (
    <div className="App">
       <Box position="sticky" top="0" zIndex="1000" >
          <Navbar/>
       </Box>
       <Box  mt="0.8rem">
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Calender/>
       <Stats/>
        <Contact/>
        
       </Box>
       
    </div>
  );
}

export default App;
