import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
import Hamberger from "./Hamberger";
import { ImCross } from "react-icons/im";
import useToggleHook from "../hooks/ToggleHook";
import Theme from "./theme/Theme";
import { style } from "./RawMaterial";
import { hashlinks } from "./RawMaterial";
import { useEffect } from "react";
import resume from "../Componets/Shakil-Pendhari-Resume.pdf";
import stylee from "./Navbar.module.css";

const Navbar = ({ theme, ChangeTheme }) => {
  const [hamNav, ChangeHamNav] = useToggleHook(); /*used custom hook here*/
  const color = useColorModeValue("white", "gray.800");

  useEffect(() => {
    if (hamNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [hamNav]);

  return (
    <div
      style={{
        zIndex: "1000",
        userSelect: "none",
        WebkitUserSelect: "none",
        transition: "all 0.3s ease-in",
      }}
    >
      <Flex
        padding={{
          base: "0.4rem 1rem",
          sm: "0.5rem 0rem",
          md: "0.5rem 3rem",
          lg: " 0.6rem 3rem",
        }}
        // color="black"
        direction="row"
        // style={{ ...style, color: color }}
        // style={style}
        className={!theme ? stylee.navbarLight : stylee.navbarDark}
        transition="all 0.3s ease-in 0.1s"
        alignItems="center"
      >
        <Flex
          flex="2.5"
          justifyContent="left"
          alignItems="center"
          marginLeft={{ base: "1.5rem", sm: "1.5rem", md: "0.5rem" }}
        >
          <HashLink to="#">
            <Heading
              className={!theme?stylee.logo:stylee.logoDark}
              padding="0.5rem 0rem 0.5rem"
              w={{ base: "2.2rem", sm: "3rem", md: "3.3rem", lg: "3.6rem" }}
              h={{ base: "2.2rem", sm: "3rem", md: "3.3rem", lg: "3.6rem" }}
              borderRadius="2rem"
              textAlign="center"
              as="h3"
              lineHeight="-1rem"
              placeItems="center"
              fontSize={{ base: "16px", sm: "23px", md: "24px", lg: "27px" }}
            >
              SP
            </Heading>
          </HashLink>
        </Flex>
        <Flex
          flex="1.5"
          gap={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          {hashlinks?.map((link) => (
            <Heading 
              // color={color}
              // className={!theme?"WhiteColor":"DarkColor"}
              key={link.text} flex="1" as="h3" size="md">
              <HashLink to={link.to}>
                <span id={link.text} className={`${!theme?stylee.navbarText:stylee.navbarTextDark}`}>
                  {link.text}
                </span>
              </HashLink>
              {/* {
                console.log(theme)
              } */}
            </Heading>
          ))}
          <Link
            href={resume}
            download={true}
            //  rel="noreferrer"
            style={{ textDecoration: "none" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/17gxAc8lmovBKGQ7oEPSos8TkS9KqAjz2/view?usp=share_link",
                "_blank",
                "noreferrer"
              )
            }
          >
            <Heading 
              // className={`${!theme?"WhiteColor":"DarkColor"}`}
              flex="1" as="h3" size="md">
              {" "}
              <span className={!theme?stylee.navbarText:stylee.navbarTextDark}>Resume</span>{" "}
            </Heading>{" "}
          </Link>
          <Theme theme={theme} ChangeTheme={ChangeTheme} />{" "}
          {/* here is first theme */}
        </Flex>
        <Flex
          direction="row"
          flex="0.7"
          display={{ base: "Flex", sm: "Flex", md: "none" }}
          gap={{ base: "0.5rem", sm: "2rem", md: "2rem" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Theme theme={theme} ChangeTheme={ChangeTheme} />{" "}
            {/* here is second theme */}
          </Box>
          <Box flex="1" onClick={ChangeHamNav}>
            {!hamNav ? (
              <GiHamburgerMenu   style={{ height: "27px", width: "27px",color:"white" }} />
            ) : (
              <ImCross  style={{ color: "red" }} />
            )}
          </Box>
        </Flex>
      </Flex>
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "none",
        }}
      >
        {hamNav && <Hamberger theme={theme}  ChangeHamNav={ChangeHamNav} hamNav={hamNav} />}
      </Box>
    </div>
  );
};

export default Navbar;
