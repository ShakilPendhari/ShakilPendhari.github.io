import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./About.module.css";

const About = ({ theme }) => {
  const ref = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const handleScroll = (e) => {
  //   let options = {
  //     root: null,
  //     rootMargins: "0px", // top margin and bottom margin
  //     threshold: 0, //when top of element see then it allow to do lazy loading
  //   };
  //   const observer = new IntersectionObserver(handleIntersect, options);
  //   observer.observe(ref.current);

  //   function handleIntersect (entries){
  //       if(entries[0].isIntersecting)
  //       {
  //         let about = document.getElementById("About");
  //             about.className = "navbutAnimationAdd"
  //       }
  //       else{
  //         let about = document.getElementById("About");
  //         about.className = "navbutAnimationRemove"
  //         about.classList.remove("navbutAnimationAdd")
  //       }
  //   }
  // }

  return (
    <Flex
      ref={ref}
      id="about"
      className={!theme ? style.About : style.AboutDark}
      marginTop="6rem"
      marginBottom="5rem"
      direction="column"
      padding="6rem 0rem"
      gap="1rem"
    >
      <Heading
        as="h1"
        width="auto"
        m="auto"
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        textShadow="2px 2px 10px rgb(250 200 100)"
        fontSize={{ base: "1.3rem", sm: "1.6rem", md: "2rem" }}
        margin="auto"
        mb="2rem"
        boxShadow="0px 0px 3px grey"
        borderBottom={`3px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
        p="0.2rem 0.8rem"
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        // color={!theme?"black":"white"}
      >
        About Me
      </Heading>
      <Box
        display={{ base: "flex", md: "flex" }}
        borderBottom={`3px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        boxShadow={`0px 2px 6px ${!theme ? "#3182CE" : "#8B54F8"}`}
        overflow="hidden"
        gap={{ base: "1rem", sm: "2rem", md: "4rem" }}
        // padding="2rem 1rem"
        alignItems="center"
        width="82%"
        m="auto"
        justifyContent="space-evenly"
        flexDir={{ base: "column", sm: "column", md: "row" }}
        p={{base:"1rem",sm:"1rem",md:"2rem 2.3rem 3.4rem"}}
      >
        <Box
          zIndex="10"
          width={{ base: "90%", sm: "97%", md: "60%" }}
          float="left"
          flex="2"
          mt={{ base: "0rem", sm: "0rem", md: "3rem" }}
        >
          <Text
            m="1rem 0rem"
            fontSize={{ base: "18px", sm: "20px", md: "1.5rem" }}
            data-aos="fade-right"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            fontWeight="900"
            color={!theme ? "green" : "yellow"}
            textShadow="2px 2px 15px rgb(250 200 50)"
            textAlign="center"
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            I'm Shakil Balam Pendhari
          </Text>
          <Text
            width={{ base: "80%", sm: "100%", md: "100%" }}
            data-aos="fade-right"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            m="auto"
            fontSize={{ base: "17px", sm: "19px", md: "1.4rem" }}
            // fontSize={{ base: "17px", sm: "19px", md: "1.1rem" }}
            textShadow="2px 2px 10px rgb(150 150 150)"
            fontWeight="600"
            textAlign="justify"
            color={!theme ? "black" : "rgb(230, 215, 215)"}
          >
            As an aspiring full-stack MERN developer, I am passionate about
            creating projects that positively impact and serve the masses. With
            a strong drive to make a difference, I thrive in fast-paced
            environments and embrace challenges as opportunities for growth.
            Specializing in the MERN stack, I am eager to contribute my skills
            and expertise to create innovative solutions that meet the demands
            of today's dynamic industry. Ready to embark on a journey of
            continuous learning and delivering impactful results as a dedicated
            MERN stack developer.
          </Text>
          <Flex
            m={{ base: "0.4rem auto", sm: "0.6rem auto", md: "1rem auto" }}
            justifyContent="center"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            gap="0.4rem"
            width={{ base: "98%", sm: "34%", md: "15%" }}
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
          >
            <Box margin="auto">
              {/* <svg
            focusable="false"
            aria-hidden="true"
            width="70px"
            height="70px"
            viewBox="0 0 70 70"
            //     width="20%"
            data-testid="MailIcon"
          >
          
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                zoomAndPan="magnify"
                viewBox="0 -5 30 30.000001"
                height="40"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                {!theme ? (
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                    fill="black"
                  />
                ) : (
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                    fill="red"
                  />
                )}{" "}
              </svg>
            </Box>
            <Text
              className={style.email}
              fontSize={{ base: "1rem", sm: "1.2rem", md: "1.3rem" }}
              color="rgba(60, 60, 225, 0.8)"
              width={{ base: "95%", sm: "16rem", md: "18rem" }}
              margin="auto"
              fontWeight="500"
              // marginLeft="1rem"
              // textShadow={`2px 2px 10px ${!theme?"rgb(150 150 150)":"white"}`}
            >
              shakilpp123456@gmail.com
            </Text>
          </Flex>
        </Box>
        <Image
          // float="right"
          width={{ base: "90%", sm: "50%", md: "30%" }}
          // border="1px solid red"
          flex="1"
          objectFit="content"
          height="100%"
          src="https://camo.githubusercontent.com/97d0c0c4209208d8ec9573c7e213e05872a9f59b703868647b559b77af601cc6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f65382f66342f35332f65386634353334363961336563393765636433353464663436356437333931332e676966"
        />
      </Box>
    </Flex>
  );
};

export default About;
