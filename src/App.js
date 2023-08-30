import "./App.css";
import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home/Home";
import Skill from "./Pages/Skill/Skill";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import { Box } from "@chakra-ui/react";
import About from "./Pages/About/About";
import Calender from "./Pages/Calender/Calender";
import Stats from "./Pages/Stats/Stats";
import { useEffect, useState } from "react";
import navbarStyle from "./Componets/Navbar.module.css";
import useToggleHook from "./hooks/ToggleHook";

const obj = {
  Home: false,
  About: false,
  Skill: false,
  Project: false,
  Contact: false,
};

function App() {
  // const [theme, ChangeTheme] = useToggleHook();
  const [ theme, setTheme ] = useState(true);
  const [isIntersection, setIsIntersection] = useState(obj);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollYVal, setLastScrollYVal] = useState(0);

  // useEffect(() => {
  //   // console.log(isIntersection)
  //   window.addEventListener("scroll", handleScoll);

  //   return () => window.removeEventListener("scroll", handleScoll);
  // }, [lastScrollYVal]);

  useEffect(() => {
    // console.log(isIntersection)
    window.addEventListener("scroll", handleScoll);

    return () => window.removeEventListener("scroll", handleScoll);
  });

  const handleScoll = () => {
    let CurrentScrollY = Math.floor(window.scrollY);
    if (CurrentScrollY > lastScrollYVal) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    // console.log("ScrollY",Math.floor(window.scrollY))
    setLastScrollYVal(CurrentScrollY);
  };

  const ChangeTheme = ()=>{
    setTheme(!theme);
  }

  return (
    <div className={`App ${!theme ? "appLight" : "appDark"}`}>
      <Box
        className={`${navbarStyle.navShow} ${
          showNavbar ? "" : navbarStyle.navHidden
        }`}
      >
        <Navbar theme={theme} ChangeTheme={ChangeTheme} />
      </Box>
      <Box pt={{ base: "3rem", sm: "5rem" }}>
        <Home
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <About
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <Skill
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <Project
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <Calender theme={theme} />
        <Stats theme={theme} />
        <Contact
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
      </Box>
    </div>
  );
}

export default App;
