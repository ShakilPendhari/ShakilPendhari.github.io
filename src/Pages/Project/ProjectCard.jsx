import { Button, Flex, Tooltip, Image, Text, Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Project.module.css"

let cardCss = {
  flexDirection: "column",
  border: "5px solid yellow",
  margin: "auto",
  borderRadius: "1rem",
  overflow: "hidden",
  backgroundColor: "orange",
  boxShadow: "1px 1px 10px 3px violet ",
  // boxShadow: "rgba(250, 250, 200, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
};

let cardHover = {
  transform: "scale(1.1)",
  transition: "all 0.8s ease-in 0.1s",
  borderRadius: "3rem",
  zIndex: "100",
  overflow: "hidden",
};

let lang = { color: "red" };

const ProjectCard = ({
  information,
  title,
  techStacks,
  img,
  github,
  deployLink,
  theme
}) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Flex
      data-aos="zoom-in-up"
      data-aos-delay="20"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      _hover={cardHover}
      style={cardCss}
      width={{ base: "90%", sm: "90%", md: "80%" }}
    >
      <Box
        justifyContent="space-between"
        gap="1rem"
        // display={{base:"flex",sm:"flex",md:"block"}}
        direction={{ base: "column", sm: "column", md: "row" }}
        flexWrap="wrap"
      >
        <Image
          float="left"
          flex="2.3"
          width={{ base: "100%", sm: "100%", md: "67%" }}
          height={{ base: "8rem", sm: "13rem", md: "17rem" }}
          // objectFit="cover"
          src={img}
          borderBottomRightRadius="2rem"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          mr="1rem"
          alt={title}
        />
        <Text
          flex="1"
          fontSize={{ base: "14px", sm: "17px", md: "1.2rem" }}
          padding="0rem 0.5rem"
          textAlign="justify"
          textShadow="2px 2px 10px rgb(140 100 150)"
          verticalAlign="middle"
          fontFamily="mono, sans-serif"
          // width={{ base: "100%", sm: "100%", md: "32%" }}
          fontWeight="600"
        >
          {information}
        </Text>
      </Box>
      <Flex
        width="100%"
        m="left"
        gap="1rem"
        justifyContent="space-around"
        padding="1rem"
        direction={{ base: "column", sm: "row" }}
        alignItems="center"
      >
        <Flex flex="2.3" gap="0.5rem" justifyContent="left" direction="column">
          <Flex
            justifyContent="center"
            alignItems="center"
            border="0.1rem solid"
            width={{ base: "100%", sm: "63%", md: "35%" }}
            // width="auto"
            // flexDirection={{ base: "column", sm: "row", md: "row" }}
            // background="cyan.300"
            // borderRadius="10px"
            // m="1rem 0rem"
            boxShadow="0px 0px 4px 0px black"
            // backgroundColor="transparent"
            // p="1rem"
            boxSizing="border-box"
            m="1rem 0rem"
            as="b"
            gap="0.5rem"
            minWidth={{ sm: "14rem", md: "16rem" }}
            fontSize={{ base: "14px", sm: "17px", md: "1.2rem" }}
            textShadow="2px 2px 10px green"
            animation="shining 1.3s ease-in infinite alternate"
          >
            <Text textAlign="justify" 
            // flex="1" 
            color="red">
              Title :
            </Text>
            <Text
              // flex={{ base: "1", sm: "1", md: "5" }}
              textAlign="justify"
              fontFamily="mono, sans-serif"
              fontWeight="550"
            >
              {title}
            </Text>
          </Flex>
          <Flex
            // flex="1"
            as="b"
            gap="0.5rem"
            direction={{ base: "row", sm: "row", md: "row" }}
            fontSize={{ base: "14px", sm: "17px", md: "1.2rem" }}
            textShadow="2px 2px 10px rgb(250 0 0)"
            flexDirection={{ base: "column", sm: "column", md: "row" }}
            // justifyContent="center"
            // alignItems="center"
            // background="yellow.400"
            // borderRadius="10px"
            // boxShadow="0px 0px 5px 1px green"
            // backgroundColor="transparent"
            // p="1rem"
          >
          <Flex  flex="1" w="45%" justifyContent="center" alignItems="flex-start">
          <Flex
              flex="1"
              textAlign="center"
              color="green"
              border="0.1rem solid black" 
              p="0rem 0.3rem"
              borderRadius="4px"
              boxShadow="0px 0px 5px grey"
              height={{ sm: "1.7rem", md: "2rem" }}
              minWidth={{ sm: "6.5rem", md: "8rem" }}
              // display={{ base: "none", sm: "none", md: "flex" }}
            >
              Tech Stacks :
            </Flex>
          </Flex>
           
            <Flex
              flex={{ base: "1", sm: "1", md: "5" }}
              flexWrap="wrap"
              textAlign="justify"
              fontFamily="mono, sans-serif"
              color="grey"
              as="b"
              fontSize={{ base: "14px", sm: "17px", md: "1.2rem" }}
              textShadow="2px 2px 10px rgb(250 0 0)"
            >
              {techStacks &&
                techStacks.length !== 0 &&
                techStacks.map((el, i) => (
                  <Text
                    border="2px solid black"
                    backgroundColor="yellowgreen"
                    boxShadow="0px 0px 4px 1px grey"
                    color="black"
                    borderRadius="5px"
                    p="0.1rem 0.3rem"
                    // m="0.3rem 0.4rem"
                    m="0rem 0.4rem 0.3rem"
                    key={i}
                    height="26px"
                    textAlign="justify"
                    fontSize="0.9rem"
                    textShadow="2px 2px 10px rgb(120 120 120)"
                  >
                    {el}
                  </Text>
                ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex={{ base: "1", sm: "1", md: "1.2" }}
          gap="2rem"
          direction={{ base: "row", sm: "row", md: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            boxShadow="0px 1px 4px 4px black"
            padding="0.1rem"
            margin="auto"
            bgColor="whiteAlpha.700"
            borderRadius="5rem"
          >
            <a href={github}  target="_blank" rel="noreferrer">
              <Tooltip
                label="See Code base"
                placement="left-start"
                color="orange"
                hasArrow="true"
                padding="0.4rem"
                borderRadius="0.4rem"
                backgroundColor="blue.600"
              >
                <svg viewBox="71 71 370 370" width="35px">
                  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                </svg>
              </Tooltip>
            </a>
          </Box>
          <Tooltip
            label="See Deployed app"
            placement="right-start"
            color="orange"
            hasArrow="true"
            padding="0.4rem"
            borderRadius="0.4rem"
            backgroundColor="blue.600"
          >
            <a
              href={deployLink}
              target="_blank"
              rel="noreferrer"
              style={{
                boxShadow: "0px 1px 2px 2px rgba(20, 20, 20, 0.7)",
                borderRadius: "5px",
                overflow: "hidden",
                backgroundColor: !theme?"#FFFFFFA3":"black",
                overFlow:"hidden"
              }}
            >
              <Button
                className={style.live}
                variant="outline"
                width={{ base: "2rem", sm: "4rem", md: "5rem" }}
                color={!theme?"black":"white"}
              >
                Live
              </Button>
            </a>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
