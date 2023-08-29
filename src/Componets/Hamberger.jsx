import { Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { hashlinks } from "./RawMaterial";
import resume from "../Componets/Shakil-Pendhari-Resume.pdf";
import stylee from "./Navbar.module.css";

const Hamberger = ({ ChangeHamNav,theme }) => {

  return (
    <Flex
      direction="column"
      // gap="2rem"
      mt="0rem"
      p="5rem"
      backgroundColor={theme?"rgb(50,50,50)":"#754141"}
      h="100vh"
      justifyContent="center"
      alignItems="center"
      // zIndex="1000"
    >
      {hashlinks?.map((link) => (
        <Heading
          key={link.text}
          flex="1"
          as="h3"
          size="md"
          onClick={ChangeHamNav}
        >
          <HashLink className={!theme?stylee.navbarText:stylee.navbarTextDark}  to={link.to}>{link.text}</HashLink>
        </Heading>
      ))}
      <Link
        href={resume}
        download
        style={{ textDecoration: "none" }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/17gxAc8lmovBKGQ7oEPSos8TkS9KqAjz2/view?usp=share_link",
            "_blank",
            "noreferrer"
          )
        }
      >
        <Heading  flex="1" as="h3" size="md" className={!theme?stylee.navbarText:stylee.navbarTextDark} >
          Resume
        </Heading>
      </Link>
    </Flex>
  );
};

export default Hamberger;
