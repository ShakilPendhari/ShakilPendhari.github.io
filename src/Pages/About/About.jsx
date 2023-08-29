import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./About.module.css"

const About = ({theme}) => {
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
      ref = {ref}
      id="about"
      className={!theme?style.About:style.AboutDark}
      marginTop="6rem"
      marginBottom="5rem"
      direction="column"
      padding="6rem 0rem"
      gap="1rem"
    >
      <Heading
        as="h1"
        borderBottom="3px solid green"
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
        // color={!theme?"black":"white"}
      >
        About Me
      </Heading>
      <Text
        fontSize={{ base: "18px", sm: "20px", md: "1.5rem" }}
        data-aos="fade-right"
         data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        fontWeight="900"
        color={!theme?"green":"yellow"}
        textShadow="2px 2px 15px rgb(250 200 50)"
        textAlign="center"
        style={{userSelect:"none",WebkitUserSelect:"none"}}
      >
        I'm Shakil Balam Pendhari
      </Text>
      <Text
        width="60%"
        data-aos="fade-left"
         data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        m="auto"
        fontSize={{ base: "17px", sm: "19px", md: "1.4rem" }}
        textShadow="2px 2px 10px rgb(150 150 150)"
        fontWeight="700"
        textAlign="justify"
        color={!theme?"black":"rgb(230, 215, 215)"}
      >
        As an aspiring full-stack MERN developer, I am passionate about creating projects that positively impact and serve the masses. With a strong drive to make a difference, I thrive in fast-paced environments and embrace challenges as opportunities for growth. Specializing in the MERN stack, I am eager to contribute my skills and expertise to create innovative solutions that meet the demands of today's dynamic industry. Ready to embark on a journey of continuous learning and delivering impactful results as a dedicated MERN stack developer.
      </Text>
      <Flex
        justifyContent="center"
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
         gap="0.4rem"
        width={{ base: "98%", sm: "34%", md: "15%" }}
        margin="auto"
        direction={{ base: "column", sm: "row" }}
        alignItems="center"
      >
        <Box margin="auto" >
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
<svg xmlns="http://www.w3.org/2000/svg"  width="40" zoomAndPan="magnify" viewBox="0 -5 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0">{!theme?<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="black"/>:<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="red"/>} </svg>
        </Box>
        <Text
          className={style.email}
          fontSize={{base:"1rem",sm:"1.2rem",md:"1.3rem"}}
          color="rgba(60, 60, 225, 0.8)"
          width={{ base: "95%", sm: "16rem",md:"18rem" }}
          margin="auto"
          // marginLeft="1rem"
          textShadow="2px 2px 10px rgb(150 150 150)"
        >
       shakilpp123456@gmail.com
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
