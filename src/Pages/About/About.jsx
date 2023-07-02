import { Flex, Heading, Text,Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css"

const About = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Flex  id="about" 
          marginTop="12rem"
          marginBottom="5rem"
          direction="column"
          // backgroundColor="red.400"
          backgroundColor="black"
          padding="6rem 0rem"
          // _hover={{ boxShadow:"1px 0px 0px 2px yellow", color:"white"}}
          gap="1rem">
       <Heading  as="h1" borderBottom="3px solid green" width="auto" m="auto"
      data-aos="fade-down"
       data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
       textShadow="2px 2px 10px rgb(250 200 100)"
       fontSize={{base:"1.1rem",sm:"1.5rem",md:"2rem"}}
                margin="auto"
                mb="2rem">About Me</Heading>
       <Text 
                 fontSize={{base:"20px", 
                            sm:"25px",
                            md:"1.5rem"}}
             data-aos="fade-right"
             data-aos-delay="300"
             data-aos-duration="10000"
             data-aos-easing="ease-in-out"
             fontWeight="900"
             color="green"
             textShadow="2px 2px 15px rgb(250 200 50)">I'm Shakil Balam Pendhari</Text>
       <Text width="60%"
             data-aos="fade-left"
             data-aos-delay="300"
             data-aos-duration="10000"
             data-aos-easing="ease-in-out"
             m="auto"
             fontSize={{base:"20px", 
                            sm:"25px",
                            md:"1.2rem"}}
             textShadow="2px 2px 10px rgb(150 150 150)"
             fontWeight="700">Aspiring full Stack MERN Developer. I love to make projects which are helpful for masses and serve as a great helpful entity. Looking forward to working in a fastpaced environment and hope to work in a challenging environment as a specialized MERN Stack Developer</Text>
       <Flex justifyContent="center"
             data-aos="fade-right"
             data-aos-delay="300"
             data-aos-duration="10000"
             data-aos-easing="ease-in-out" 
            //  gap="0.4rem"
             width={{base:"98%",sm:"34%",md:"15%"}}
             margin="auto"
             direction={{base:"column",sm:"row"}}
             alignItems="center">
       <Box flex="1" margin="auto">
       <svg
                      focusable="false" 
                      aria-hidden="true" 
                      viewBox="0 0 24 24" 
                  //     width="20%"
                      data-testid="MailIcon">
                      <path 
                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                      </path>
                  </svg>
       </Box>
        <Text flex="1" color="rgba(60, 60, 225, 0.8)" width={{base:"30%",sm:"100%"}}  margin="auto"   textShadow="2px 2px 10px rgb(150 150 150)" >shakilpp123456@gmail.com</Text>
       </Flex>
    </Flex>
  )
}

export default About