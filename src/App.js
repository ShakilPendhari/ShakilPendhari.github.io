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
import { useEffect, useState } from 'react';

const obj = {
  Home : false,
  About : false,
  Skill : false,
  Project : false,
  Contact : false
}

function App() {
  const [ isIntersection, setIsIntersection ] = useState(obj);

  useEffect(()=>{
    console.log(isIntersection)
  })
  return (
    <div className="App">
       <Box position="sticky" height="99%" top="0" left="0" zIndex="1000" >
          <Navbar/>
       </Box>
       <Box >
        <Home setIsIntersection={setIsIntersection} obj={obj} isIntersection={isIntersection}/>
        <About setIsIntersection={setIsIntersection} obj={obj} isIntersection={isIntersection}/>
        <Skill setIsIntersection={setIsIntersection} obj={obj} isIntersection={isIntersection}/>
        <Project setIsIntersection={setIsIntersection} obj={obj} isIntersection={isIntersection}/>
        <Calender/>
       <Stats/>
        <Contact setIsIntersection={setIsIntersection} obj={obj} isIntersection={isIntersection}/>
        
       </Box>
       
    </div>
  );
}

export default App;
